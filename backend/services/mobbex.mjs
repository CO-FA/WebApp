//back
import { getToken } from "./token.mjs";
import { URL } from "./url.mjs";
import fetch, { Headers } from "node-fetch";
import { recuperarLead } from "./updateDatosPrestamo.mjs";

export const suscripcionMobbex = async ({nroDocumento, returnURL}) => {
  const leadRecuperado = await recuperarLead(nroDocumento);
  console.log("lead recuperado mobbex back/services", leadRecuperado)
  console.log("dni mobbex",nroDocumento)
  console.log("leadRecuperado.id_preaprobado mobbex",leadRecuperado.id_preaprobado)

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
    console.log("susciptionMobbex datos",body);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(body),
      redirect: "follow",
    };

    const resp = await fetch(URL + "/API/v1/lending/mobbexSubscription", requestOptions);
    const dataMobbexSuscription = await resp.json();

    console.log("dataMobbexSuscription", dataMobbexSuscription)
    return dataMobbexSuscription
    // dato que necesito! subscriptionURL: 'https://mobbex.com/p/subscriptions/757AVV6I1NHFE4T57D/subscriber/DZWK7SJ4K3CYUNLODT/source' 
  } catch (error) {
    console.log(error);
  }
  return Promise.resolve(null);
};