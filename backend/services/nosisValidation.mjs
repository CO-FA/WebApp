import { getToken } from "./token.mjs";
import { URL } from "./url.mjs";
import fetch, { Headers } from "node-fetch";

export const validarIdentidadNosis = async ({ nroDocumento,idPreaprobado, CallbackURL}) => {
  try {
    const token = await getToken();

    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token?.token);
    myHeaders.append("Content-type", "application/json");

    const body = {
      nroDocumento,
      idPreaprobado,
      CallbackURL
    };
    console.log("datos validadIdentidadNosis", body);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(body),
      redirect: "follow",
    };

    const resp = await fetch(URL + "/API/v1/lending/faceOnboadingNosis", requestOptions);
    const data = await resp.json();

    console.log("data validarNOSIS", data)
    //URL es el dato que necesito
    return data
    
  } catch (error) {
    console.log(error);
  }
  return Promise.resolve(null);
};