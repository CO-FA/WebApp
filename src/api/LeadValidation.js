import { post } from "./HttpApi";

export const validarLead = async ({ dni, cuit }) => {
  let url = "/back/validate-lead";
  const obj = await post(url, {
    nroDocumento: dni,
    cuit: cuit,
  });
  console.log("validarLead", obj);
  return obj || {};
};
