//back
import { getToken } from "./token.mjs";
import { URL } from "./url.mjs";
import fetch, { Headers } from "node-fetch";

export const terminosYcondiciones = async ({ipCliente, leadRecuperado}) => {
  const { id_preaprobado, cuit } = leadRecuperado
  try {
    const token = await getToken();

    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token?.token);
    myHeaders.append("Content-type", "application/json");
    
    const body = {
      idPreaprobado: id_preaprobado,
	    nroDocumento: cuit,
      IP: ipCliente,
    };
    console.log("body terminos y condiciones", body);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(body),
      redirect: "follow",
    };

    const resp = await fetch(URL + "/API/v1/lending/acceptTerms", requestOptions);
    const dataAceptarTerminos = await resp.json();
    console.log("Resp terminos y condiciones", dataAceptarTerminos);

    return dataAceptarTerminos
    
  } catch (error) {
    console.log(error);
  }
  return Promise.resolve(null);
};


export const firmaElectronica = async ({idPrestamo}) => {
  try {
    const token = await getToken();

    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token?.token);
    myHeaders.append("Content-type", "application/json");

    const body = {
      idPrestamo: idPrestamo,
      accion: 1
    };

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(body),
      redirect: "follow",
    };

    const resp = await fetch(URL + "/API/v1/loans/firmaElectronica", requestOptions);
    const dataFirmaElectronica = await resp.json();
    console.log("firma electronica", dataFirmaElectronica);
    
    return dataFirmaElectronica
    
  } catch (error) {
    console.log(error);
  }
  return Promise.resolve(null);
};