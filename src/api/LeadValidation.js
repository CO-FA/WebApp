export const validarLead = async ({ dni, cuit, sexo, situacion, codigo, nombre, telefono }) => {
  let url = "/back/validate-lead";
  const body = {
    nroDocumento: dni,
    cuit: cuit,
    sexo,
    situacion,
    codigo,
    nombre,
    telefono,
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
