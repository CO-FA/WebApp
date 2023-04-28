import { post } from "./HttpApi";

export const validarLead = async ({ dni, cuit, genero, situacion }) => {
  let url = process.env.IS_LOCAL
    ? "/back/validate-lead"
    : "http://localhost:3001/validate-lead";
  const body = {
    nroDocumento: dni,
    cuit: cuit,
    genero,
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
