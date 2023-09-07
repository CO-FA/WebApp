import { createClient } from "@supabase/supabase-js";
import { getToken } from "./token.mjs";
import { URL } from "./url.mjs";
import fetch, { Headers } from "node-fetch";
import { updateStatusFirma } from "./validateLoan";

const supabaseUrl = process.env.SUPABASE_URL;
const supabase = createClient(supabaseUrl, process.env.SUPABASE_KEY);

//TO DO: chequear con Lean
const chequearStatusFirma = async (cuit) => {
    let { data: leadRecupado, error } = await supabase
    .from('leads')
    .select('status_firma_electronica')
    .where('status_firma_electronica' == "Pendiente de firma")
    .eq("cuit", cuit)
    console.log("lead", leadRecupado)
    return leadRecupado
}; 

export const statusFirmaElectronica = async ({lead}) => {
    const {cuit, sb_id_prestamo, sb_id_cliente, monto, cuotas, importeCuota } = lead
    
    //cada 5  10 min ir a supa a buscar lead con status pendiente de firma. 
    var cron = require('node-cron');

    cron.schedule('5 * * * *', async () => {
        await chequearStatusFirma(cuit)
    });

  try {
    //tomo el id prestamo y voy a sb a ver si firmo o no.
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

    console.log("estado firma SB", dataStatusFirmaSB)

    //TO DO: chequear cual es mensaje correcto
    if (dataStatusFirmaSB.estadoFirma === "Firmado") {
        //dispara el envio del prestamo desde el back.
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
    
        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: JSON.stringify(body1),
          redirect: "follow",
        };
    
        const resp = await fetch(URL + "/API/v1/loans/new", requestOptions);
        const dataAltaPrestamo = await resp.json();
        
        console.log("altaPrestamo", dataAltaPrestamo)

        //actualizo status supabase
        const statusFirma = "Firmado"
        await updateStatusFirma(statusFirma, lead)
    }

    console.log("prestamo enviado! :)")

  } catch (error) {
    console.log(error);
  }
  return Promise.resolve(null);
};