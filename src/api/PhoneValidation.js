import { post } from "./HttpApi";

export const enviarSMSValidacion = async (celular, documento) => {
  const obj = await post("/API/v1/lending/validatePhone", {
    nroDocumento: documento,
    celular: celular,
  });
  console.log("enviarSMSValidacion", obj);
  return obj || {};
};

export const savePhone = async (codigo, documento) => {
  const obj = await post("/API/v1/lending/savePhone", {
    nroDocumento: documento,
    codigo: codigo,
  });
  console.log("savePhone", obj);
  return obj || {};
};
