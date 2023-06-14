//back
import { getToken } from "./token.mjs";
import { URL } from "./url.mjs";
import fetch, { Headers } from "node-fetch";

export const crearPassword = async (codigo, documento, clave) => {
  try {
    const token = await getToken();

    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token?.token);
    myHeaders.append("Content-type", "application/json");

    const body2 = {
      nroDocumento: documento,
      codigo: codigo,
      password: clave,
    };

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(body2),
      redirect: "follow",
    };
    
    const resp = await fetch(URL + "/API/v1/lending/resetLoginSMS", requestOptions);
    const data = await resp.json();
  
    console.log("respuesta sb crearPassword", data)

    return data
  } catch (error) {
    console.log(error);
  }
  return Promise.resolve(null);
};