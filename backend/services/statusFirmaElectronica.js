import { getToken } from "./token.mjs";
import { URL } from "./url.mjs";
import fetch, { Headers } from "node-fetch";
import { updateStatusFirma } from "./validateLoan.js";
import { createClient } from "@supabase/supabase-js";
import cron from 'node-cron';

const supabaseUrl = process.env.SUPABASE_URL;
const supabase = createClient(supabaseUrl, process.env.SUPABASE_KEY);

export const statusFirmaElectronica = async ({lead}) => {
  let { data, error } = await supabase
  .from('leads')
  .select('cuit , sb_id_prestamo , status_firma_electronica')
  .eq('cuit', lead)
};

//va a SB a chequear si el status de la firma cambio cada x min '*/5 * * * *'
cron.schedule('*/2 * * * *', async () => {
  try {
    const leadsPendienteFirma = await buscarLeadsPendientesDeFirma() 
    for (let index = 0; index < leadsPendienteFirma.length; index++) {
      const elementLead = leadsPendienteFirma[index];
      await consultaSB({elementLead})
    }
  } catch (error) {
    console.error("Error al ejecutar la tarea cron:", error);
  }
});

const buscarLeadsPendientesDeFirma = async () => {
  let { data: leads, error } = await supabase
  .from('leads')
  .select('*')
  console.log("Leads pendientes de firma: ", leads)
  return leads
};


const consultaSB = async ({ elementLead }) => {
  const { sb_id_prestamo, sb_id_cliente, monto, cuotas, importeCuota } = elementLead;

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

  console.log("estado firma SB", dataStatusFirmaSB);

  //TO DO: concatenar fecha actual -- 18/09/2023
  //toLocaleDateString() te entrega 7/2/2021
  if (dataStatusFirmaSB.estadoFirma === "Completado - Firmado el 18/09/2023") {
    const statusFirma = "Firmado";
    await updateStatusFirma(statusFirma, elementLead);

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
    await resp1.json();

    console.log("¡Prestamo enviado! :)");

  } else {
    console.error("No se pudo enviar el prestamo.");
  }
  } catch (error) {
    console.error("Error en statusFirmaElectronica:", error);
    throw error;
  }
};


