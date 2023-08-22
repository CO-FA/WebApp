import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabase = createClient(supabaseUrl, process.env.SUPABASE_KEY);

const actualizarStatusNosis =  async (cuit, nosis_status) => {
    const { data, error } = await supabase
      .from('leads')
      .update({ nosis_status: nosis_status })
      .eq('cuit', cuit)
    console.log(error)
}

export const update = async ({cuit, nosis_status}) => {

  await actualizarStatusNosis(cuit, nosis_status)

  console.log ("Actualicacion STATUS NOSIS exitosa.")

}
