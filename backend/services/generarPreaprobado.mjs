export const generarPreaprobado = async (body) => {
  console.log("DATOS RECIBIDOS DE PRESTAMOS", body);
  const { monto, cuota, documento } = body;

  //Recuperar el lead de la BD (leads)
  //Recuperar los intereses de la BD (config_intereses)
  //Calcular el prestamo desde el backend
  //Enviar todo a SB
};
