import { createClient } from "@supabase/supabase-js";
import { recuperarLead } from "./updateDatosPrestamo.mjs";

const supabaseUrl = process.env.SUPABASE_URL;
const supabase = createClient(supabaseUrl, process.env.SUPABASE_KEY);

const actualizarPasswordLead = async (nroDocumento, password) => {
  const { data, error } = await supabase
    .from("leads")
    .update({ password: password })
    .eq("documento", nroDocumento);
  console.log(error);
};

export const crearPassword = async ({nroDocumento, password}) => {

  await actualizarPasswordLead (nroDocumento, password)
  
  const leadPassActualizada = await recuperarLead (nroDocumento)

  return leadPassActualizada

};