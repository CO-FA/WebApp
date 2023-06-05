import { createClient } from "@supabase/supabase-js";
//import { createIdPreaprobado } from "./createIDPreaprobado.mjs";

const supabaseUrl = process.env.SUPABASE_URL;
const supabase = createClient(supabaseUrl, process.env.SUPABASE_KEY);

const recuperarLead = async (documento) => {
  let { data: lead, error } = await supabase
    .from("leads")
    .select("*")
    .eq("documento", documento);
  console.log(error);
  return lead[0];
};

const recuperarIntereses = async (categoriaLeadRecuperado) => {
  let { data: config_intereses, error } = await supabase
    .from("config_intereses")
    .select("*")
    .eq("categoria", categoriaLeadRecuperado);
  console.log(error);
  return config_intereses[0];
};

const calcularCuota = (capital, interes, plazo) => {
  const interest = (capital * (interes * 0.01)) / plazo;
  let payment = capital / plazo + interest;
  return payment || 0.0;
};

const actualizarLead = async (documento, monto, cuota, importeCuota) => {
  const { data, error } = await supabase
    .from("leads")
    .update({ monto: monto, cuotas: cuota, importeCuota: importeCuota })
    .eq("documento", documento);
  console.log(error);
};

/* const actualizarIDLead = async (documento, resp) => {
  const { data, error } = await supabase
    .from("leads")
    .update({ id_preaprobado: resp.idPreaprobado, sb_status: resp.status, sb_motivo: resp.motivo})
    .eq("documento", documento);
  console.log(error);
}; */

export const generarPreaprobado = async (body) => {
  const { monto, cuota, documento } = body;

  let leadRecuperado = await recuperarLead(documento);
  const categoriaLeadRecuperado = leadRecuperado.categoria;
  console.log("Lead-recuperado: ", leadRecuperado)

  const interesXcategoria = await recuperarIntereses(categoriaLeadRecuperado);
  const interesRecuperado = interesXcategoria.interes;

  const importeCuota = calcularCuota(monto, interesRecuperado, cuota);

  await actualizarLead(
    documento,
    monto,
    cuota,
    importeCuota
  );

  leadRecuperado = await recuperarLead(documento);
  
  /* const resp = await createIdPreaprobado (leadRecuperado)
  console.log("id-preaprobado", resp)

  await actualizarIDLead(
    documento,
    resp
  ); */
};
