import { createClient } from "@supabase/supabase-js";
import {  altaPrestamo } from "./altaPrestamo.js";
import { getIdCliente } from "./getIdCliente.js";
import { firmaElectronica, terminosYcondiciones } from "./terminosYcondiciones.mjs";
import { recuperarLead } from "./updateDatosPrestamo.mjs";

const supabaseUrl = process.env.SUPABASE_URL;
const supabase = createClient(supabaseUrl, process.env.SUPABASE_KEY);

const updateIdCliente = async (numIdCliente, nroDocumento) => {
  const { data, error } = await supabase
  .from('leads')
  .update({ sb_id_cliente: numIdCliente })
  .eq('documento', nroDocumento)
  .select()
};

const updateIdPrestamo = async (numIdPrestamo, nroDocumento) => {
  const { data, error } = await supabase
    .from('leads')
    .update({ sb_id_prestamo: numIdPrestamo })
    .eq('documento', nroDocumento)
    .select()
};

export const updateStatusFirma = async (statusFirma, nroDocumento) => {
  const { data, error } = await supabase
  .from('leads')
  .update({ status_firma_electronica: statusFirma })
  .eq('documento', nroDocumento)
  .select()
};

export const validateLoan = async ({IP, nroDocumento}) => {
  const leadRecuperado = await recuperarLead(nroDocumento);

  try {
    
    await terminosYcondiciones({IP, leadRecuperado})

    const getcliente = await getIdCliente({leadRecuperado})
    const numIdCliente = getcliente[0].idCliente
    await updateIdCliente(numIdCliente, nroDocumento)

    const dataAltaPrestamo = await altaPrestamo({numIdCliente, leadRecuperado})
    const numIdPrestamo = dataAltaPrestamo.idPrestamo
    await updateIdPrestamo(numIdPrestamo, nroDocumento)
    
    await firmaElectronica({numIdPrestamo})
    const statusFirma = "Pendiente de firma" //enviado - pendiente de firma
    await updateStatusFirma(statusFirma, nroDocumento)

    return statusFirma
    
  } catch (error) {
    console.log(error);
  }
  return Promise.resolve(null);
};