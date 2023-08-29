import { getToken } from "./token.mjs";
import { URL } from "./url.mjs";
import fetch, { Headers } from "node-fetch";

export const altaPrestamo = async ({idCliente,fechaAlta,comercializadora_Sucursal, monto,cuotas,lineaCredito,destinoFondos,importeCuota, primerVto,formaPago,estado, referencia}) => {
  try {
    const token = await getToken();

    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token?.token);
    myHeaders.append("Content-type", "application/json");

    const body = {
        idCliente: idCliente,
        fechaAlta: fechaAlta,
        comercializadora_Sucursal: comercializadora_Sucursal,
        monto: monto,
        cuotas: cuotas,
        lineaCredito: lineaCredito,
        destinoFondos: destinoFondos,
        importeCuota: importeCuota,
        primerVto: primerVto,
        formaPago: formaPago,
        estado: estado,
        referencia: referencia
    };

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(body),
      redirect: "follow",
    };

    const resp = await fetch(URL + "/API/v1/loans/new", requestOptions);
    const data = await resp.json();
    
    console.log("altaPrestamo", data)

    return data
    
  } catch (error) {
    console.log(error);
  }
  return Promise.resolve(null);
};