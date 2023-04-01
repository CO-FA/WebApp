/*
#TEST
SP_API_URL=https://cofatest.sbfintech.net/API/v1/
#https://cofatest.sbfintech.net/API/v1/lending/bureau
SP_API_USER=Coder
SP_API_PASS=Programador
*/

import { URL } from "./url";
//const { URL } = require("./url");
import fetch, { Headers } from "node-fetch";

export const getToken = async () => {
  try {
    const myHeaders = new Headers();
    myHeaders.append("Content-type", "application/json");
    const req = {
      Username: "Coder",
      Password: "Programador",
    };
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(req),
      redirect: "follow",
    };
    const resp = await fetch(
      URL + "/API/v1/login/authenticate",
      requestOptions
    );

    const token = await resp.json();
    console.log("getToken", token);
    return token;
  } catch (error) {
    console.log(error);
  }

  return Promise.reject("Error al obtener los datos");
};
