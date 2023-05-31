import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabase = createClient(supabaseUrl, process.env.SUPABASE_KEY);

const recuperarLead = async (documento) => {
  let { data: lead, error } = await supabase
  .from('leads')
  .select('*')
  .eq('documento', documento)
  console.log(error)
  return lead
}; 

const recuperarIntereses = async (categoriaLeadRecuperado) => {
  let { data: config_intereses, error } = await supabase
  .from('config_intereses')
  .select('*')
  .eq('categoria', categoriaLeadRecuperado)
  console.log(error)
  return config_intereses
};

const calcularCuota = (capital, interes, plazo) => {
  const interest = (capital * (interes * 0.01)) / plazo;
  let payment = capital / plazo + interest;
  return payment || 0.0;
};

export const generarPreaprobado = async (body) => {
  const { monto, cuota, documento } = body;

  const leadRecuperado = await recuperarLead(documento);
  console.log("lead recuperado:", leadRecuperado);
  const categoriaLeadRecuperado = leadRecuperado[0].categoria
  console.log("categoria lead: ", categoriaLeadRecuperado)

  const interesXcategoria = await recuperarIntereses(categoriaLeadRecuperado);
  const interesRecuperado = interesXcategoria[0].interes
  console.log("interes recuperado: ", interesRecuperado);

  const calularPrestamos = calcularCuota(monto, interesRecuperado, cuota)
  console.log("calularPrestamos", calularPrestamos) 

  //TODO: Enviar todo a SB
};