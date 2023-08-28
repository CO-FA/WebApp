export const datosPrestamo = async ({ documento, monto, cuota}) => {
  let url = "/back/update-datos-prestamo";

  const body = {
    documento,
    monto,
    cuota
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
