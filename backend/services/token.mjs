import { URL } from "./url.mjs";
//const { URL } = require("./url");
import fetch, { Headers } from "node-fetch";

export const getToken = async () => {
  try {
    const myHeaders = new Headers();
    myHeaders.append("Content-type", "application/json");
    const req = {
      Username: process.env.SP_API_USER,
      Password: process.env.SP_API_PASS,
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
