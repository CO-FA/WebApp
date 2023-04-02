import { getToken } from "./token.mjs";
import { URL } from "./url.mjs";
import fetch, { Headers } from "node-fetch";

export const getVariablesBuro = async (nroDocumento) => {
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
    const resp = await fetch(URL + "API/v1/lending/bureau", requestOptions);

    const respText = await resp.text();
    console.log("Resp getVariablesBuro", respText);
    return JSON.parse(respText);
  } catch (error) {
    console.log(error);
  }
  return null;
};
