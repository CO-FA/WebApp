export const infoPrestamo = async ({buttonId, LeadRecuperado}) => {
    const { sb_id_prestamo } = LeadRecuperado;
  try {

    if (buttonId === "detalles") 
    {
        //TO DO: funcion
        await detallesPrestamo({idPrestamo : sb_id_prestamo})
    } 
    else if(buttonId === "solicitud") 
    {
        //TO DO: funcion
        await solicitudCredito({idPrestamo: sb_id_prestamo})
    } 
    
  } catch (error) {
    console.log(error);
  }
  return Promise.resolve(null);
};