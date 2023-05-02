export const validarLead = async ({ dni, cuit, sexo, situacion }) => {
  let url = "/back/validate-lead";
  const body = {
    nroDocumento: dni,
    cuit: cuit,
    sexo, //ANTO: acá decia genero y se recibia como parametro sexo
    situacion,
  };
  const obj = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  console.log("validarLead", obj);
  return obj.json() || {};
};
