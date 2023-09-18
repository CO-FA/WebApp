//back
import { getToken } from "./token.mjs";
import { URL } from "./url.mjs";
import fetch, { Headers } from "node-fetch";


export const terminosYcondiciones = async ({IP, leadRecuperado}) => {
  const { id_preaprobado, cuit } = leadRecuperado

  try {
    const token = await getToken();

    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token?.token);
    myHeaders.append("Content-type", "application/json");
    
    const body = {
      idPreaprobado: id_preaprobado,
	    nroDocumento: cuit,
      IP: IP,
    };

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(body),
      redirect: "follow",
    };

    const resp = await fetch(URL + "/API/v1/lending/acceptTerms", requestOptions);
    const dataAceptarTerminos = await resp.json();

    return dataAceptarTerminos
    
  } catch (error) {
    console.log(error);
  }
  return Promise.resolve(null);
};


export const firmaElectronica = async ({numIdPrestamo}) => {
  try {
    const token = await getToken();

    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token?.token);
    myHeaders.append("Content-type", "application/json");

    const body = {
      idPrestamo: numIdPrestamo,
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
    
    return dataFirmaElectronica
    
  } catch (error) {
    console.log(error);
  }
  return Promise.resolve(null);
};