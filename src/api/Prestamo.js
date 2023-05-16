export const datosPrestamo = async ({ intereses, monto, cuota, montoCuota, }) => {
    let url = "/back/generarPreaprobados";

    const body = {
      intereses,
      monto,
      cuota,
      montoCuota,
    };
    console.log("datos calculadora prestamo", body);
    
    const obj = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    return obj.json() || {};
  };