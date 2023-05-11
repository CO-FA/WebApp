import { post } from "./HttpApi"; // esto es lo que me tira error  'ERR_MODULE_NOT_FOUND'

/* export const enviarSMSValidacion = async (celular, documento) => {
  const obj = await post("/API/v1/lending/validatePhone", {
    nroDocumento: documento,
    celular: celular,
  });
  console.log("enviarSMSValidacion", obj);
  return obj || {};
}; */

export const savePhone = async (codigo, documento) => {
  const obj = await post("/API/v1/lending/savePhone", {
    nroDocumento: documento,
    codigo: codigo,
  });
  console.log("savePhone", obj);
  return obj || {};
};
