import fetch from "node-fetch";

export const getVariablesBuro = async ({cuit}) => {
  try {
    const api_key = "i29filtn2knejvij5io9nddhfi30sp01672pwuhw6vsvokv2hg"

    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    console.log("Req getVariablesBuro", requestOptions);

    const resp = await fetch(`https://infoexperto-production.up.railway.app/api/${api_key}/datos/${cuit}`, requestOptions);

    const respText = await resp.text();
    console.log("Resp getVariablesBuro", respText);
    return JSON.parse(respText);
  } catch (error) {
    console.log(error);
  }
  return null;
};


/* export const getVariablesBuro = async ({ nroDocumento, sexo }) => {
  try {
    const token = await getToken();

    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token?.token);
    myHeaders.append("Content-type", "application/json");

    const body = { nroDocumento: nroDocumento, sexo: sexo };

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(body),
      redirect: "follow",
    };
    console.log("URL getVariablesBuro", URL + "/API/v1/lending/bureau");
    console.log("Req getVariablesBuro", requestOptions);

    const resp = await fetch(URL + "/API/v1/lending/bureau", requestOptions);

    const respText = await resp.text();
    console.log("Resp getVariablesBuro", respText);
    return JSON.parse(respText);
  } catch (error) {
    console.log(error);
  }
  return null;
}; */