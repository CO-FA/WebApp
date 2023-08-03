import { post } from "./HttpApi";

export const enviarSMSValidacion = async (celular, cuit) => {
  const obj = await post("/API/v1/lending/validatePhone", {
    nroDocumento: cuit,
    celular: celular,
  });
  console.log("enviarSMSValidacion", obj);
  return obj || {};
};

export const savePhone = async (codigo, cuit) => {
  const obj = await post("/API/v1/lending/savePhone", {
    nroDocumento: cuit,
    codigo: codigo,
  });
  console.log("savePhone", obj);
  return obj || {};
};
