//back
import { getToken } from "./token.mjs";
import { recuperarLead } from "./updateDatosPrestamo.mjs";
import { URL } from "./url.mjs";
import fetch, { Headers } from "node-fetch";

export const validarEmail = async ({nroDocumento, email}) => {
    const leadRecuperado = await recuperarLead(nroDocumento);
  try {
    const token = await getToken();

    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token?.token);
    myHeaders.append("Content-type", "application/json");

    const body = {
      nroDocumento,
      idPreaprobado: leadRecuperado.id_preaprobado,
      email,
    };
    console.log("datos validarEmail", body);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(body),
      redirect: "follow",
    };

    const resp = await fetch(URL + "/API/v1/lending/validateMail", requestOptions);
    const data = await resp.json();

    console.log("data validarEmail", data)

    return data
    
  } catch (error) {
    console.log(error);
  }
  return Promise.resolve(null);
};