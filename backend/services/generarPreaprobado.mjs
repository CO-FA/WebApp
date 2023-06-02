import { createClient } from "@supabase/supabase-js";

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

export const generarPreaprobado = async (body) => {
  const { monto, cuota, documento } = body;

  const leadRecuperado = await recuperarLead(documento);
  const categoriaLeadRecuperado = leadRecuperado.categoria;

  const interesXcategoria = await recuperarIntereses(categoriaLeadRecuperado);
  const interesRecuperado = interesXcategoria.interes;

  const importeCuota = calcularCuota(monto, interesRecuperado, cuota);

  const actualizacion = await actualizarLead(
    documento,
    monto,
    cuota,
    importeCuota
  );

  //TODO: invocar el WS de generación de preaprobado en SB y con el resultado actualizar lead con el ID de preaprobado que devolvió SB su status

  console.log(actualizacion);
};
