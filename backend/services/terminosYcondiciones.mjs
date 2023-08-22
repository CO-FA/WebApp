//back
import { getToken } from "./token.mjs";
import { URL } from "./url.mjs";
import fetch, { Headers } from "node-fetch";

export const terminosYcondiciones = async ({nroDocumento, idPreaprobado,IP}) => {
  try {
    const token = await getToken();

    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token?.token);
    myHeaders.append("Content-type", "application/json");

    const body = {
      nroDocumento,
      idPreaprobado,
      IP,
    };

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(body),
      redirect: "follow",
    };

    const resp = await fetch(URL + "/API/v1/lending/acceptTerms", requestOptions);
    const data = await resp.json();

    console.log("data aceptar terminos y condiciones", data)
    return data
    
  } catch (error) {
    console.log(error);
  }
  return Promise.resolve(null);
};


export const firmaElectronica = async ({idPrestamo, accion}) => {
  try {
    const token = await getToken();

    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token?.token);
    myHeaders.append("Content-type", "application/json");

    const body = {
      idPrestamo,
      accion
    };

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(body),
      redirect: "follow",
    };

    const resp = await fetch(URL + "/API/v1/loans/firmaElectronica", requestOptions);
    const data = await resp.json();

    console.log("data firma electronica", data)
    return data
    
  } catch (error) {
    console.log(error);
  }
  return Promise.resolve(null);
};