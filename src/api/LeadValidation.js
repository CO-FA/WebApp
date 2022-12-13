import { post } from "./HttpApi";

export const validarLead = async (documento) => {
  const obj = await post("/API/v1/lending/savePhone", {
    nroDocumento: documento,
  });
  console.log("savePhone", obj);
  return obj || {};
};
