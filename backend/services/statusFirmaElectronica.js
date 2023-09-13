import { createClient } from "@supabase/supabase-js";
import { getToken } from "./token.mjs";
import { URL } from "./url.mjs";
import fetch, { Headers } from "node-fetch";
import { updateStatusFirma } from "./validateLoan";

const supabaseUrl = process.env.SUPABASE_URL;
const supabase = createClient(supabaseUrl, process.env.SUPABASE_KEY);

const chequearStatusFirma = async (cuit) => {
  try {
    // Corregir la condición y agregar await
    let { data: leadRecuperado, error } = await supabase
      .from('leads')
      .select('status_firma_electronica') 
      //.where('status_firma_electronica' == "Pendiente de firma") ??
      .eq("cuit", cuit)
      .single(); 

    console.log("lead", leadRecuperado);
    return leadRecuperado;
  } catch (error) {
    console.error("Error al recuperar el lead:", error);
    throw error; 
  }
};

export const statusFirmaElectronica = async ({ lead }) => {
  const { cuit, sb_id_prestamo, sb_id_cliente, monto, cuotas, importeCuota } = lead;

  var cron = require('node-cron');
  cron.schedule('*/5 * * * *', async () => { 
    try {
      await chequearStatusFirma(cuit);
    } catch (error) {
      console.error("Error al verificar el estado de firma:", error);
    }
  });

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

    if (dataStatusFirmaSB.estadoFirma === "Firmado") {
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

      const statusFirma = "Firmado";
      await updateStatusFirma(statusFirma, lead);
    }

    console.log("¡Prestamo enviado! :)");

  } catch (error) {
    console.error("Error general:", error);
    throw error;
  }
  return Promise.resolve(null);
};
