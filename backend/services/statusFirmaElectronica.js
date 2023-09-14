import { getToken } from "./token.mjs";
import { URL } from "./url.mjs";
import fetch, { Headers } from "node-fetch";
import { updateStatusFirma } from "./validateLoan";


//TO DO: revisar con Lean

//va a SB a chequear si el status de la firma cambio cada 5 min '*/5 * * * *'
const cron = require('node-cron');

export const statusFirmaElectronica = async ({ lead }) => {
  const { sb_id_prestamo, sb_id_cliente, monto, cuotas, importeCuota } = lead;

  try {
  const token = await getToken();
  const myHeaders = new Headers();

  myHeaders.append("Authorization", "Bearer " + token?.token);
  myHeaders.append("Content-type", "application/json");

  const body = {
    idPrestamo: sb_id_prestamo,
    accion: 0
  };

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(body),
    redirect: "follow",
  };

  const resp = await fetch(URL + "/API/v1/loans/firmaElectronica", requestOptions);
  const dataStatusFirmaSB = await resp.json();

  console.log("estado firma SB", dataStatusFirmaSB); //esto devuelve el estado de la firma segun SB

  if (dataStatusFirmaSB.estadoFirma === "Firmado") {
    const statusFirma = "Firmado";
    await updateStatusFirma(statusFirma, lead);

    const body1 = {
      idCliente: sb_id_cliente,
      fechaAlta: new Date(),
      comercializadora_Sucursal: 1,
      monto: monto,
      cuotas: cuotas,
      lineaCredito: 1,
      destinoFondos: 1,
      importeCuota: importeCuota,
      primerVto: null,
      formaPago: 2,
      estado: 0,
      referencia: "Préstamo de prueba"
    };

    const requestOptions1 = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(body1),
      redirect: "follow",
    };

    const resp1 = await fetch(URL + "/API/v1/loans/new", requestOptions1);
    const dataAltaPrestamo = await resp1.json();

    console.log("altaPrestamo", dataAltaPrestamo);
    console.log("¡Prestamo enviado! :)");
  } else {
    console.error("No se pudo enviar el prestamo.");
  }
  } catch (error) {
    console.error("Error en statusFirmaElectronica:", error);
    throw error;
  }
};

cron.schedule('*/1 * * * *', async ({lead}) => {
  console.log(lead)
  try {
    await statusFirmaElectronica({lead});
  } catch (error) {
    console.error("Error al ejecutar la tarea cron:", error);
  }
});
