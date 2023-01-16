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
        body: JSON.stringify({ error: "Nro de documento invalido" }),
      };
    }

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
