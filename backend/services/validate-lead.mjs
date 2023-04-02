import { getVariablesBuro } from "./buro.mjs";
import { getCountSituaciones } from "./situaciones.mjs";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabase = createClient(supabaseUrl, process.env.SUPABASE_KEY);

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

const isValidBuro = async (nroDocumento) => {
  const variables = await getVariablesBuro(nroDocumento);
  console.log(variables);
  const result = true;

  return result;
};

const getNSE = async (nroDocumento) => {
  const variables = await getVariablesBuro(nroDocumento);
  console.log(variables);

  const result = variables.find((el) => el.Variable === "NSE");

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

export const validateLead = async (body) => {
  console.log("This was a POST request.. CONTINUE");
  try {
    const maxDocument = process.env.maxDocument || "18000000";
    //const token = event.queryStringParameters.token;
    // Parse the JSON text received.
    const response = { mensaje: "lead valido" };
    console.info("REQUEST body", body);
    //TODO: Validar nro doc
    //TODO: Validar CENDEU
    //TODO: Validar Nosis
    //TODO: Generar preaprobado
    if (parseFloat(body.nroDocumento) < parseFloat(maxDocument)) {
      console.error(`Nro de documento invalido, mayor a ${maxDocument}`, body);

      return { error: "Nro de documento inválido" };
    }

    const isInvalidBCRA = await isInvalidBcra(body.nroDocumento);
    if (isInvalidBCRA) {
      console.log("BCRA INVALIDO");
      return { error: "No tenemos prestamos para ofrecerte" };
    }

    //const isValidBURO = await isValidBuro(body.nroDocumento);
    const nse = await getNSE(body.nroDocumento);
    console.log("NSE", nse);

    const intereses = await getIntereses(nse);
    console.log("intereses", intereses);
    response.data = intereses;

    console.log("Devuelvo todo bien", response);
    return response;
  } catch (error) {
    console.error("Error VALIDATE LEAD", error);
    return { error: error };
  }
};
