export const generarAltaPrestamo = async ({idCliente,fechaAlta,comercializadora_Sucursal, monto,cuotas,lineaCredito,destinoFondos,importeCuota, primerVto,formaPago,estado, referencia }) => {

    let url = "/back/alta-prestamo";
  
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
  
    const obj = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  
    return obj.json() || {};
  };
  