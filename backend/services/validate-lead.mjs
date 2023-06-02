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
  console.log("situaciones Laborales", situacion, error);

  return situacion.some((sit) => sit.categoria_riesgo > 0);
};

const isInvalidBcra = async (nroDocumento) => {
  let { data: bcraValidationConfig, error } = await supabase
    .from("bcra_validation_config")
    .select();
  console.log(bcraValidationConfig, error);

  const bcraLead = await getCountSituaciones(nroDocumento);
  console.log("bcraLead", bcraLead);
  const result = bcraValidationConfig.some((sit) => {
    const catidadLead = bcraLead[sit.situacion];
    console.log({
      sit: sit.situacion,
      catidadLead,
      isvalidBcra: catidadLead > parseInt(sit.max_cantidad_situacion),
    });
    return catidadLead > parseInt(sit.max_cantidad_situacion);
  });
  return result;
};

/* const isValidBuro = async (nroDocumento) => {
  const variables = await getVariablesBuro(nroDocumento);
  console.log(variables);
  const result = true;

  return result;
}; */

const guardarLead = async ({
  nroDocumento,
  cuit,
  sexo,
  situacion,
  nombre,
  telefono,
  }) => {
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
  console.log(data, error);
  return { lead: data, error };
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

//esta funcion no anda!
const updateVariablesLead = async ({ documento, variables }) => {
  const categoria = variables?.find((el) => el.Variable === "IncomePredictor");
  const { data, error } = await supabase
    .from("leads")
    .update({
      variables,
      categoria: categoria?.Valor,
      updated_at: new Date(),
    })
    .eq("documento", documento);
  
  return { updateVariablesLead: data, error };
};

const getNivelRiesgo = async ({ nroDocumento, variables }) => {
  await updateVariablesLead({ documento: nroDocumento, variables });
  const result = variables?.find((el) => el.Variable === "IncomePredictor");
  return result?.Valor;
};

const getIntereses = async (categoria) => {
  let { data: config_intereses, error } = await supabase
    .from("config_intereses")
    .select("*")
    .eq("categoria", categoria);
  console.log(config_intereses, error);

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
  const { nroDocumento, cuit, sexo, situacion, codigo, nombre, telefono } = body;
  console.log("This was a POST request.. CONTINUE");
  try {
    await guardarLead(body);
    const responsePhone = await savePhone(codigo, nroDocumento);
    console.log("responsePhone", responsePhone);

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
        console.log("isValidSituacion","Situación INVALIDO");
        return ERRORS.error_sin_prestamo;
      }

      const isInvalidBCRA = await isInvalidBcra(nroDocumento);
      if (isInvalidBCRA) {
        let estado = "Rechazado"
        let mensaje= `BCRA invalido`
        await updateEstadoLead({documento: nroDocumento, estado, mensaje})
        console.log("BCRA INVALIDO");
        return ERRORS.error_sin_prestamo;
      }

      //const isValidBURO = await isValidBuro(body.nroDocumento);

      //ACA GUARDAR LOS DATOS DE BURO
      const variables = await getVariablesBuro({ nroDocumento: nroDocumento, sexo: sexo });
      await updateVariablesLead({ documento: nroDocumento, variables });

      const nse = await getNivelRiesgo({
        nroDocumento: nroDocumento,
        sexo: sexo,
        variables,
      });
      console.log("NSE", nse);

      const intereses = await getIntereses(nse);
      response.data = intereses;

      console.log("Devuelvo todo bien", response);

      return response;
    }
  } catch (error) {
    console.error("Error VALIDATE LEAD", error);
    return { error: error };
  }
};
