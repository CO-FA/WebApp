import { savePhone } from "./phoneValidation.js";
import { getVariablesBuro } from "./buro.mjs";
import { getCountSituaciones } from "./situaciones.mjs";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabase = createClient(supabaseUrl, process.env.SUPABASE_KEY);

const isValidSituacionLaboral = async (codigoSituacion) => {
  let { data: situacion, error } = await supabase
    .from("situacion_laboral")
    .select()
    .eq("id", codigoSituacion);
  console.log(error);

  return situacion.some((sit) => sit.categoria_riesgo > 0);
};

const isInvalidBcra = async (nroDocumento) => {
  let { data: bcraValidationConfig, error } = await supabase
    .from("bcra_validation_config")
    .select();
  console.log(error);

  const bcraLead = await getCountSituaciones(nroDocumento);
  const result = bcraValidationConfig.some((sit) => {
    const catidadLead = bcraLead[sit.situacion];
    return catidadLead > parseInt(sit.max_cantidad_situacion);
  });
  return result;
};

/* const isValidBuro = async (variablesBuro) => {
  let { data: condiciones, error } = await supabase
  .from("buro_validation_config")
  .select();

  condiciones.forEach((condicion)=>{
    const variable = variablesBuro?.find((el) => el.Variable === condicion.variable);
    // eslint-disable-next-line default-case
    switch(variable.condicion){
      case "=":
        if(variable.valor !== condicion.valor)
          return false
    }
  })
}; */

const guardarLead = async ({
  nroDocumento,
  cuit,
  sexo,
  situacion,
  nombre,
  telefono,
  }) => {

  const { data: leadsExistente, error} = await supabase
  .from("leads")
  .select("*")
  .eq("documento", nroDocumento);

  if (leadsExistente.length > 0) {
    return { lead: null, error: null };
  } else {
    const { data, error } = await supabase.from("leads").insert([
      {
        documento: nroDocumento,
        telefono: telefono,
        nombre: nombre,
        situacion: situacion,
        genero: sexo,
        cuit: cuit,
      },
    ]);
    console.log(error);
    return { lead: data, error };
  }
};

const updateEstadoLead = async ({ documento, estado, mensaje }) => {
  const { data, error } = await supabase
    .from("leads")
    .update({
      sb_status: estado,
      sb_motivo: mensaje,
      updated_at: new Date(),
    })
    .eq("documento", documento);
  return { estadoLead: data, error };
};

const updateVariablesLead = async ({ documento, variables }) => {
  const categoria = variables?.find((el) => el.variable === "datos.nivelSocioeconomico.nse_personal");
  const { data, error } = await supabase
    .from("leads")
    .update({
      variables_buro: variables,
      categoria: categoria?.valor,
      updated_at: new Date(),
    })
    .eq("documento", documento);
  
  return { updateVariablesLead: data, error };
};

const getNivelRiesgo = async ({ nroDocumento, variables }) => {
  await updateVariablesLead({ documento: nroDocumento, variables });
  const result = variables?.find((el) => el.variable === "datos.nivelSocioeconomico.nse_personal");
  return result?.valor;
};

const getIntereses = async (categoria) => {
  let { data: config_intereses, error } = await supabase
    .from("config_intereses")
    .select("*")
    .eq("categoria", categoria);
  console.log(error);

  return config_intereses.length > 0 && config_intereses[0];
};

const ERRORS = {
  error_documento: { error: "Nro de documento inválido", cd_error: 1 },
  error_sin_prestamo: {
    error: "No tenemos prestamos para ofrecerte",
    cd_error: 2,
  },
  error_pin: {
    error: "PIN invalido",
    cd_error: 3,
  },
};

export const validateLead = async (body) => {
  const { nroDocumento, cuit, sexo, situacion, codigo } = body;
  try {
    await guardarLead(body);
    const responsePhone = await savePhone(codigo, cuit);

    const isValidPinSMS = responsePhone.status === "OK";
    if (!isValidPinSMS) {
      return ERRORS.error_pin;
    } else if (isValidPinSMS) {
      const maxDocument = process.env.MAX_DOCUMENT || "18000000";
      //const token = event.queryStringParameters.token;
      // Parse the JSON text received.
      const response = { mensaje: "lead valido" };

      if (parseFloat(nroDocumento) < parseFloat(maxDocument)) {
        let estado = "Rechazado";
        let mensaje = `Nro de documento invalido, mayor a ${maxDocument}`;
        await updateEstadoLead({ documento: nroDocumento, estado, mensaje})
        console.error(
          `Nro de documento invalido, mayor a ${maxDocument}`,
          body
        );
        return ERRORS.error_documento;
      }

      const isValidSituacion = await isValidSituacionLaboral(situacion);
      if (!isValidSituacion) {
        let estado = "Rechazado";
        let mensaje = "Situacion laboral invalida";
        await updateEstadoLead({ documento: nroDocumento, estado, mensaje })
        return ERRORS.error_sin_prestamo;
      }

      const isInvalidBCRA = await isInvalidBcra(nroDocumento);
      if (isInvalidBCRA) {
        let estado = "Rechazado"
        let mensaje= `BCRA invalido`
        await updateEstadoLead({documento: nroDocumento, estado, mensaje})
        return ERRORS.error_sin_prestamo;
      }

      const variables = await getVariablesBuro({ cuit: cuit});
      await updateVariablesLead({ documento: nroDocumento, varibales: variables });

      //const isValidBURO= await isValidBuro();

      const nse = await getNivelRiesgo({
        nroDocumento: nroDocumento,
        sexo: sexo,
        variables: variables,
      });

      const intereses = await getIntereses(nse);
      response.data = intereses;

      return response;
    }
  } catch (error) {s
    return { error: error };
  }
};
