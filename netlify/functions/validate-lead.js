import { getVariablesBuro } from "./services/buro";
import { getCountSituaciones } from "./services/situaciones";
// Connect to our database
const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = "https://kalflkedbvpefagjojgm.supabase.co";
const supabase = createClient(
  supabaseUrl,
  //"sbp_4ea052f38f2e8b1767419aff1b99489408fd5d7b"
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImthbGZsa2VkYnZwZWZhZ2pvamdtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzU5NTIzNTcsImV4cCI6MTk5MTUyODM1N30.u2h2104SlsCC7WTLGvftYrez82waLiKr7JcdmPKdlKY"
);

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

exports.handler = async (event, context, callback) => {
  console.log(event);
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  };

  if (event.httpMethod !== "POST") {
    console.log("To enable CORS.. NOT CONTINUE");
    // To enable CORS
    return {
      statusCode: 200, // <-- Important!
      headers,
      body: "This was not a POST request!",
    };
  }
  console.log("This was a POST request.. CONTINUE");
  try {
    const maxDocument = process.env.maxDocument || "18000000";
    //const token = event.queryStringParameters.token;
    // Parse the JSON text received.
    const body = JSON.parse(event.body);
    const response = { mensaje: "lead valido" };
    console.info("REQUEST body", body);
    //TODO: Validar nro doc
    //TODO: Validar CENDEU
    //TODO: Validar Nosis
    //TODO: Generar preaprobado
    if (parseFloat(body.nroDocumento) < parseFloat(maxDocument)) {
      console.error(`Nro de documento invalido, mayor a ${maxDocument}`, body);

      return {
        headers: headers,
        statusCode: 200,
        body: JSON.stringify({ error: "Nro de documento inválido" }),
      };
    }

    const isInvalidBCRA = await isInvalidBcra(body.nroDocumento);
    if (isInvalidBCRA) {
      console.log("BCRA INVALIDO");
      return {
        headers: headers,
        statusCode: 200,
        body: JSON.stringify({ error: "No tenemos prestamos para ofrecerte" }),
      };
    }

    //const isValidBURO = await isValidBuro(body.nroDocumento);
    const nse = await getNSE(body.nroDocumento);
    console.log("NSE", nse);

    const intereses = await getIntereses(nse);
    console.log("intereses", intereses);
    response.data = intereses;

    const resp = {
      headers: headers,
      statusCode: 200,
      body: JSON.stringify(response),
    };
    console.log("Devuelvo todo bien", resp);
    return resp;
  } catch (error) {
    console.error("Error VALIDATE LEAD", error);
    return {
      headers: headers,
      statusCode: 500,
      body: JSON.stringify({ error: error }),
    };
  }
};
