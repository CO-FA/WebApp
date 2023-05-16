export const validarLead = async ({ dni, cuit, sexo, situacion, codigo }) => {
  let url = "/back/validate-lead";
  const body = {
    nroDocumento: dni,
    cuit: cuit,
    sexo,
    situacion,
    codigo,
  };
  console.log("datos-Body", body);
  
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
