import {  altaPrestamo } from "./altaPrestamo";
import { getIdCliente } from "./getIdCliente";
import { firmaElectronica, terminosYcondiciones } from "./terminosYcondiciones.mjs";

export const validateLoan = async ({ipCliente, leadRecuperado}) => {
  console.log(ipCliente, leadRecuperado)
  try {
    
    await terminosYcondiciones({ipCliente, leadRecuperado})

    const getcliente = await getIdCliente({leadRecuperado})
    const numIdCliente = getcliente.idcliente

    const dataAltaPrestamo = await altaPrestamo({numIdCliente, leadRecuperado})
    const numIdPrestamo = dataAltaPrestamo.idPrestamo
    
    await firmaElectronica({numIdPrestamo})

    const statusFirma = "Pendiente de firma"
    return statusFirma
    
  } catch (error) {
    console.log(error);
  }
  return Promise.resolve(null);
};