import { getToken } from "./token.mjs";
import { URL } from "./url.mjs";
import fetch, { Headers } from "node-fetch";

export const savePhone = async (codigo, documento) => {
  try {
    const token = await getToken();

    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token?.token);
    myHeaders.append("Content-type", "application/json");

    const body = {
      nroDocumento: documento,
      codigo: codigo,
    };

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(body),
      redirect: "follow",
    };
    
    const resp = await fetch(URL + "/API/v1/lending/savePhone", requestOptions);
    return await resp.json();
  } catch (error) {
    console.log(error);
  }
  return Promise.resolve(null);
};
