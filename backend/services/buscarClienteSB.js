import fetch, { Headers } from "node-fetch";
import { getToken } from "./token.mjs";
import { URL } from "./url.mjs";

export const buscarCliente = async ({cuit}) => {
  try {
    const token = await getToken();

    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token?.token);
    myHeaders.append("Content-type", "application/json");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    const resp = await fetch(URL + `/API/v1/customers/getByDoc?nroDocumento=${cuit}`, requestOptions);

    const respText = await resp.text();
    console.log("Resp buscarCliente", respText);
    
    return JSON.parse(respText);
  } catch (error) {
    console.log(error);
  }
  return null;
};