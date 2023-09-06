import { createClient } from "@supabase/supabase-js";
import {  altaPrestamo } from "./altaPrestamo.js";
import { getIdCliente } from "./getIdCliente.js";
import { firmaElectronica, terminosYcondiciones } from "./terminosYcondiciones.mjs";

const supabaseUrl = process.env.SUPABASE_URL;
const supabase = createClient(supabaseUrl, process.env.SUPABASE_KEY);

const updateIdCliente = async (numIdCliente, leadRecuperado) => {
  const { data, error } = await supabase
  .from('leads')
  .update({ sb_id_cliente: numIdCliente })
  .eq('cuit', leadRecuperado.cuit)
};

const updateIdPrestamo = async (numIdPrestamo, leadRecuperado) => {
  const { data, error } = await supabase
    .from('leads')
    .update({ sb_id_prestamo: numIdPrestamo })
    .eq('cuit', leadRecuperado.cuit)
};

const updateStatusFirma = async (statusFirma, leadRecuperado) => {
  const { data, error } = await supabase
  .from('leads')
  .update({ status_firma_electronica: statusFirma })
  .eq('cuit', leadRecuperado.cuit)
};

export const validateLoan = async ({ipCliente, leadRecuperado}) => {
  console.log(ipCliente, leadRecuperado)
  try {
    
    await terminosYcondiciones({ipCliente, leadRecuperado})

    const getcliente = await getIdCliente({leadRecuperado})
    const numIdCliente = getcliente.idcliente
    await updateIdCliente(numIdCliente, leadRecuperado)

    const dataAltaPrestamo = await altaPrestamo({numIdCliente, leadRecuperado})
    const numIdPrestamo = dataAltaPrestamo.idPrestamo
    await updateIdPrestamo(numIdPrestamo, leadRecuperado)

    await firmaElectronica({numIdPrestamo})
    const statusFirma = "Pendiente de firma"
    await updateStatusFirma(statusFirma, leadRecuperado)

    return statusFirma
    
  } catch (error) {
    console.log(error);
  }
  return Promise.resolve(null);
};