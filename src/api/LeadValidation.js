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
