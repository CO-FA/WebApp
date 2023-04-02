import { getToken } from "./token";
import { URL } from "./url";
import fetch, { Headers } from "node-fetch";

export const getSituacionesBcra = async (nroDocumento) => {
  try {
    const token = await getToken();

    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token?.token);
    myHeaders.append("Content-type", "application/json");

    const body = { nroDocumento: nroDocumento };

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(body),
      redirect: "follow",
    };
    const resp = await fetch(URL + "API/v1/lending/bcra", requestOptions);
    return await resp.json();
  } catch (error) {
    console.log(error);
  }
  return null;
};

export const getCountSituaciones = async (nroDocumento) => {
  const situaciones = await getSituacionesBcra(nroDocumento);
  console.log("SITUACIONES BRCA", situaciones);
  const result = {
    sit_1: 0,
    sit_2: 0,
    sit_3: 0,
    sit_4: 0,
    sit_5: 0,
  };
  situaciones.forEach((el) => {
    if (el["Situación"].includes("1")) {
      result.sit_1 = result.sit_1 + 1;
    }
    if (el["Situación"].includes("2")) {
      result.sit_2 = result.sit_2 + 1;
    }
    if (el["Situación"].includes("3")) {
      result.sit_3 = result.sit_3 + 1;
    }
    if (el["Situación"].includes("4")) {
      result.sit_4 = result.sit_4 + 1;
    }
    if (el["Situación"].includes("5")) {
      result.sit_5 = result.sit_5 + 1;
    }
  });
  return result;
};
