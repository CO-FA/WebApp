import { getToken } from "./token.mjs";
import { URL } from "./url.mjs";
import fetch, { Headers } from "node-fetch";

export const validarCBU = async ({nroDocumento, idPreaprobado,CBU, guardarCBU,}) => {
  try {
    const token = await getToken();

    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token?.token);
    myHeaders.append("Content-type", "application/json");

    const body = {
      nroDocumento,
      idPreaprobado,
      CBU,
      guardarCBU,
    };

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(body),
      redirect: "follow",
    };

    const resp = await fetch(URL + "/API/v1/lending/validateCBU", requestOptions);
    const data = await resp.json();
    console.log("Response data validarCBU", data);
    
    return data
    
  } catch (error) {
    console.log(error);
  }
  return Promise.resolve(null);
};