import { post } from "./HttpApi";
  
export const crearContraseña = async ({documento, codigo, clave, confirmacionClave}) => {
    const obj = await post("/API/v1/lending/resetLoginSMS", {
        nroDocumento: documento,
        codigo,
        clave,
        confirmacionClave,
    });
    console.log("crearContraseña", obj);
    return obj || {};
};