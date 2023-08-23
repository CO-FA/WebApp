import { createClient } from "@supabase/supabase-js";
import { getToken } from "./token.mjs";
import { URL } from "./url.mjs";
import fetch, { Headers } from "node-fetch";

const supabaseUrl = process.env.SUPABASE_URL;
const supabase = createClient(supabaseUrl, process.env.SUPABASE_KEY);

const actualizarEmailLead = async (nroDocumento, email) => {
  const { data, error } = await supabase
    .from('leads')
    .update({ email: email })
    .eq("documento", nroDocumento)
  console.log(error);
};


export const validarEmail = async ({nroDocumento,idPreaprobado, email, enviarCodigo}) => {
  try {
    const token = await getToken();

    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token?.token);
    myHeaders.append("Content-type", "application/json");

    const body = {
      nroDocumento,
      idPreaprobado,
      email,
      enviarCodigo
    };
    console.log("datos validarEmail", body);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(body),
      redirect: "follow",
    };

    const resp = await fetch(URL + "/API/v1/lending/validateMail", requestOptions);
    const data = await resp.json();

    console.log("data validarEmail", data)
    
    await actualizarEmailLead(data.nroDocumento, data.email)

    return data
    
  } catch (error) {
    console.log(error);
  }
  return Promise.resolve(null);
};

export const validarCodigoEmail = async ({nroDocumento, idPreaprobado, enviarCodigo}) => {
  try {
    const token = await getToken();

    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token?.token);
    myHeaders.append("Content-type", "application/json");

    const body = {
      nroDocumento, idPreaprobado, enviarCodigo
    };
    console.log("datos validarCodigoEmail", body);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(body),
      redirect: "follow",
    };

    const resp = await fetch(URL + "/API/v1/lending/saveMail", requestOptions);
    const data = await resp.json();

    console.log("data validarCodigoEmail", data)

    return data
    
  } catch (error) {
    console.log(error);
  }
  return Promise.resolve(null);
};