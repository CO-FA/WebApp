import { getToken } from "./token.mjs";
import { recuperarLead } from "./updateDatosPrestamo.mjs";
import fetch, { Headers } from "node-fetch";
import { URL } from "./url.mjs";

export const infoDetalles = async ({nroDocumento}) => {

  const leadRecuperado = await recuperarLead(nroDocumento);


  //const {sb_id_prestamo} = leadRecuperado

  try {
    const token = await getToken();

    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token?.token);
    myHeaders.append("Content-type", "application/json");

    const body = {
      idPrestamo: "8247" ,//TO DO: pasar el idPrestamo que viene de supa
    };

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(body),
      redirect: "follow",
    };

    const resp = await fetch(URL + "/API/v1/loans/detail", requestOptions);
    const data = await resp.json();

    return data
  } catch (error) {
    console.log(error);
  }
  
  return Promise.resolve(null);
  
};