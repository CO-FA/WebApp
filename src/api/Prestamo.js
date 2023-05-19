export const datosPrestamo = async ({ documento, monto, cuota }) => {
  let url = "/back/generar-preaprobados";

  const body = {
    monto,
    cuota,
    documento,
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
