import { post } from "./HttpApi";

export const validarLead = async (documento) => {
  let url = "/back/validate-lead";
  if (process.env.NODE_ENV === "development")
    url = "http://localhost:9999/.netlify/functions/validate-lead";

  //http://localhost:9999/.netlify/functions/validate-lead
  const obj = await post(url, {
    nroDocumento: documento,
  });
  console.log("validarLead", obj);
  return obj || {};
};
