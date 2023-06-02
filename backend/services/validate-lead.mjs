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

const getNivelRiesgo = async ({ nroDocumento, sexo, variables }) => {
  console.log(variables);

  //ACUTALIZAR LEAD CON LAS VARIABLES
  const result = variables?.find((el) => el.Variable === "IncomePredictor");

  return result?.Valor;
};

const getIntereses = async (categoria) => {
  let { data: config_intereses, error } = await supabase
    .from("config_intereses")
    .select("*")

    // Filters
    .eq("categoria", categoria);
  console.log(config_intereses, error);

  return config_intereses.length > 0 && config_intereses[0];
};

/* const datosLead = async (nroDocumento, sexo) => {
  const variables = await getVariablesBuro({ nroDocumento, sexo }); 

  const categoria = variables?.find((el) => el.Variable === "IncomePredictor");
  const nombre = variables?.find((el) => el.Variable === "Nombre");
  const ingresos = variables?.find((el) => el.Variable === "TipoIngreso");

  return (categoria?.Valor, nombre?.Valor, ingresos?.Valor);
}; */

const guardarLead = async ({
  nroDocumento,
  cuit,
  sexo,
  situacion,
  codigo,
  nombre,
  telefono,
}) => {
  const { data, error } = await supabase.from("leads").insert([
    {
      // DATOS INGRESADOS POR USUARIO
      documento: nroDocumento,
      //"telefono": clienteCelCodigo + clienteCelNumero,
      //"nombre": infoLead.nombre?.Valor, //MAGNANO, ANTONELLA
      //"situacion_laboral":"sit",
      genero: sexo, // F o M
    },
  ]);
  console.log("documento y sexo", nroDocumento, sexo);
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
};

const updateVariablesLead = async ({ documento, variables }) => {
  const categoria = variables?.find((el) => el.Variable === "IncomePredictor");
  const nombre = variables?.find((el) => el.Variable === "Nombre");

  const { data, error } = await supabase
    .from("leads")
    .update({
      variables,
      categoria,
      nombre,
      updated_at: new Date(),
    })
    .eq("documento", documento);
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
  const { nroDocumento, cuit, sexo, situacion, codigo, nombre, telefono } =
    body;
  console.log("validateLead", body);
  console.log("This was a POST request.. CONTINUE");
  try {
    // nroDoc y sexo puedo usarlos de aca
    const nuevoLead = await guardarLead(body);

    //TODO: validar PIN SMS
    const responsePhone = await savePhone(codigo, nroDocumento);
    console.log("responsePhone", responsePhone);

    const isValidPinSMS = responsePhone.status === "OK";
    if (!isValidPinSMS) {
      return ERRORS.error_pin;
    } else if (isValidPinSMS) {
      console.log("PIN VALIDO");

      const maxDocument = process.env.MAX_DOCUMENT || "18000000";
      //const token = event.queryStringParameters.token;
      // Parse the JSON text received.
      const response = { mensaje: "lead valido" };
      console.info("REQUEST body", body);

      if (parseFloat(nroDocumento) < parseFloat(maxDocument)) {
        //TODO: ACTUALIZAR lead a rechazado
        //updateEstadoLead
        console.error(
          `Nro de documento invalido, mayor a ${maxDocument}`,
          body
        );
        return ERRORS.error_documento;
      }

      const isValidSituacion = await isValidSituacionLaboral(situacion);
      if (!isValidSituacion) {
        //TODO: ACTUALIZAR lead a rechazado
        //updateEstadoLead
        console.log("Situación INVALIDO");
        return ERRORS.error_sin_prestamo;
      }

      const isInvalidBCRA = await isInvalidBcra(nroDocumento);
      if (isInvalidBCRA) {
        //TODO: ACTUALIZAR lead a rechazado
        //updateEstadoLead
        console.log("BCRA INVALIDO");
        return ERRORS.error_sin_prestamo;
      }

      //const isValidBURO = await isValidBuro(body.nroDocumento);

      //ACA GUARDAR LOS DATOS DE BURO
      const variables = await getVariablesBuro({ nroDocumento, sexo });
      await updateVariablesLead({ documento: nroDocumento, variables });

      const nse = await getNivelRiesgo({
        nroDocumento: nroDocumento,
        sexo: sexo,
        variables,
      });
      console.log("NSE", nse);

      const intereses = await getIntereses(nse);
      console.log("intereses", intereses);
      response.data = intereses;

      console.log("Devuelvo todo bien", response);

      return response;
    }
  } catch (error) {
    console.error("Error VALIDATE LEAD", error);
    return { error: error };
  }
};
