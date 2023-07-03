//back
import { getToken } from "./token.mjs";
import { URL } from "./url.mjs";
import fetch, { Headers } from "node-fetch";
import { recuperarLead } from "./updateDatosPrestamo.mjs";

export const suscripcionMobbex = async ({nroDocumento, returnURL}) => {
  const leadRecuperado = await recuperarLead(nroDocumento);
  
  try {
    const token = await getToken();

    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token?.token);
    myHeaders.append("Content-type", "application/json");

    const body = {
      nroDocumento,
      idPreaprobado: leadRecuperado.id_preaprobado,
      returnURL,
    };

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(body),
      redirect: "follow",
    };

    const resp = await fetch(URL + "/API/v1/lending/mobbexSubscription", requestOptions);
    const dataMobbexSuscription = await resp.json();

    console.log("dataMobbexSuscription", dataMobbexSuscription)
    const subscriptionURL = dataMobbexSuscription.subscriptionURL   
    console.log("subscriptionURL", subscriptionURL)

    return subscriptionURL
    
  } catch (error) {
    console.log(error);
  }
  return Promise.resolve(null);
};