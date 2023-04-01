import { post } from "./HttpApi";

export const validarLead = async ({ dni, cuit }) => {
  let url = "/back/validate-lead";
  /*if (process.env.NODE_ENV === "development")
    url = "http://localhost:9999/.netlify/functions/validate-lead";
*/
  //http://localhost:9999/.netlify/functions/validate-lead
  const obj = await post(url, {
    nroDocumento: dni,
    cuit: cuit,
  });
  console.log("validarLead", obj);
  return obj || {};
};
