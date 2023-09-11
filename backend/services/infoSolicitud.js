import { getToken } from "./token.mjs";
import { recuperarLead } from "./updateDatosPrestamo.mjs";
import fetch, { Headers } from "node-fetch";

export const infoSolicitud = async ({nroDocumento}) => {

  const leadRecuperado = await recuperarLead(nroDocumento);

  const {sb_id_prestamo} = leadRecuperado
  
  try {
    const token = await getToken();

    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token?.token);
    myHeaders.append("Content-type", "application/json");

    const body = {
      idPrestamo: sb_id_prestamo
    };

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(body),
      redirect: "follow",
    };

    const resp = await fetch(URL + "/API/v1/loans/downloadContract", requestOptions);
    const data = await resp.json();

    return data
  } catch (error) {
    console.log(error);
  }
  
  return Promise.resolve(null);
  
};