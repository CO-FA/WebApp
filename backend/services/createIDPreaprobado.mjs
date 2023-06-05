import { getToken } from "./token.mjs";
import { URL } from "./url.mjs";
import fetch, { Headers } from "node-fetch";

export const createIdPreaprobado = async (leadRecuperado) => {
  const {documento, nombre, genero, monto, cuota, importeCuota, categoria, situacion} = leadRecuperado;
  try {
    const token = await getToken();

    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token?.token);
    myHeaders.append("Content-type", "application/json");

    const body1 = {
      documento: documento,
      nombre: nombre,
      genero: genero,
      monto: monto,
      cuota: cuota,
      importeCuota: importeCuota,
      categoria: categoria,
      situacion: situacion,
    };

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(body1),
      redirect: "follow",
    };
    
    const resp = await fetch(URL + "/API/v1/lending/score", requestOptions);
    const data = await resp.json();
  
    console.log("respuesta sb id y status", data)

    return data
  } catch (error) {
    console.log(error);
  }
  return null;
};
