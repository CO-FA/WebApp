import { getToken } from "./token.mjs";
import { URL } from "./url.mjs";
import fetch, { Headers } from "node-fetch";

export const createIdPreaprobado = async (leadRecuperado) => {
  const {documento, nombre, genero, monto, cuota, importeCuota, telefono, fecha_nacimiento} = leadRecuperado;
  try {
    const token = await getToken();

    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token?.token);
    myHeaders.append("Content-type", "application/json");

    const body1 = {
      "nombre":nombre,
      "apellido": nombre,
      "genero":genero,
      "nroDocumento":documento,
      "fechaNacimiento": fecha_nacimiento,
      "email":documento+"@cofa.com.ar",
      "celular":telefono,
      "ingresos":0,
      "monto": monto,
      "cuotas": cuota,
      "lineaCredito":0,
      "diaPago":0,
      "importeCuota": importeCuota,
      "comercializadora_sucursal":0,
      "origen":"WebApp",
      "enviarMailOnboarding":false
    };

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(body1),
      redirect: "follow",
    };
    
    const resp = await fetch(URL + "/API/v1/lending/score", requestOptions);
    const data = await resp.json();

    return data
  } catch (error) {
    console.log(error);
  }
  return null;
};
