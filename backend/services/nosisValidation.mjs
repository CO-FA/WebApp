import { getToken } from "./token.mjs";
import { URL } from "./url.mjs";
import fetch, { Headers } from "node-fetch";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabase = createClient(supabaseUrl, process.env.SUPABASE_KEY);

const actualizarTicketSB =  async (valorTicket, nroDocumento) => {
  const { data, error } = await supabase
    .from('leads')
    .update({ nosis_ticket: valorTicket })
    .eq('cuit', nroDocumento)
  console.log(error)
}

const actualizarStatusNosis =  async (statusNosis, nroDocumento) => {
  const { data, error } = await supabase
    .from('leads')
    .update({ nosis_status: statusNosis })
    .eq('cuit', nroDocumento)
  console.log(error)
}

export const validarIdentidadNosis = async ({ nroDocumento,idPreaprobado, CallbackURL}) => {
  try {
    const token = await getToken();

    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token?.token);
    myHeaders.append("Content-type", "application/json");

    const body = {
      nroDocumento,
      idPreaprobado,
      CallbackURL
    };
    console.log("datos validadIdentidadNosis", body);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(body),
      redirect: "follow",
    };

    const resp = await fetch(URL + "/API/v1/lending/faceOnboadingNosis", requestOptions);
    const data = await resp.json();

    console.log("data validarNOSIS", data)
    
    const querystring = data.URL.split("?")[1]
    console.log(querystring)
    const paramsURL = new URLSearchParams(querystring)
    const valorTicket = paramsURL.get('ticket')
    console.log("params/numticket", valorTicket)
    
    await actualizarTicketSB(valorTicket, nroDocumento)

    const statusNosis = "pendiente"
    await actualizarStatusNosis(statusNosis, nroDocumento)
  
    return data
    
  } catch (error) {
    console.log(error);
  }
  return Promise.resolve(null);
};