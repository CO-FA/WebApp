import { getToken } from "./token.mjs";
import { URL } from "./url.mjs";
import fetch, { Headers } from "node-fetch";

export const altaPrestamo = async ({numIdCliente, leadRecuperado}) => {
  const {monto, cuotas, importeCuota} = leadRecuperado
  try {
    const token = await getToken();

    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token?.token);
    myHeaders.append("Content-type", "application/json");

    const body = {
        idCliente: numIdCliente,
        fechaAlta: new Date(),
        comercializadora_Sucursal: 1,
        monto: monto,
        cuotas: cuotas,
        lineaCredito: 1,
        destinoFondos: 1,
        importeCuota: importeCuota,
        primerVto: null,
        formaPago: 2,
        estado: 9,
        referencia: "Préstamo de prueba"
    };

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(body),
      redirect: "follow",
    };

    const resp = await fetch(URL + "/API/v1/loans/new", requestOptions);
    const dataAltaPrestamo = await resp.json();

    return dataAltaPrestamo
    
  } catch (error) {
    console.log(error);
  }
  return Promise.resolve(null);
};