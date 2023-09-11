import { createClient } from "@supabase/supabase-js";
import { getToken } from "./token.mjs";
import { URL } from "./url.mjs";
import fetch, { Headers } from "node-fetch";

const supabaseUrl = process.env.SUPABASE_URL;
const supabase = createClient(supabaseUrl, process.env.SUPABASE_KEY);

const updateCbu = async (CBU, nroDocumento) => {
  const { data, error } = await supabase
  .from('leads')
  .update({ cbu: CBU })
  .eq('cuit', nroDocumento)
  console.log("guardado")
}; 

export const validandoCBU = async ({nroDocumento, idPreaprobado, CBU, guardarCBU,}) => {
  try {
    const token = await getToken();

    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token?.token);
    myHeaders.append("Content-type", "application/json");

    const body = {
      nroDocumento,
      idPreaprobado,
      CBU: CBU,
      guardarCBU: guardarCBU,
    };
    console.log("datos validateCbu")

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(body),
      redirect: "follow",
    };

    const resp = await fetch(URL + "/API/v1/lending/validateCBU", requestOptions);
    const data = await resp.json();
    
    await updateCbu(CBU, nroDocumento)

    return data
    
  } catch (error) {
    console.log(error);
  }
  return Promise.resolve(null);
};