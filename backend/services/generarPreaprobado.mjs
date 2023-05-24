import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabase = createClient(supabaseUrl, process.env.SUPABASE_KEY);

const calcularCuota = (capital, interes, plazo) => {
  const interest = (capital * (interes * 0.01)) / plazo;
  let payment = capital / plazo + interest;
  return payment || 0.0;
};

const recuperarLead = async (documento) => {
  let { data: leads, error } = await supabase
  .from('leads')
  .select('*')
  .eq('documento', documento)
  console.log(leads, error)

  return leads
};

const recuperarIntereses = async () => {
  let { data: config_intereses, error } = await supabase
  .from('config_intereses')
  .select('interes')
  console.log(config_intereses, error)
  
  return interes
};

export const generarPreaprobado = async (body) => {
  console.log("DATOS RECIBIDOS DE PRESTAMOS", body);
  const { monto, cuota, documento } = body;

  //Recuperar el lead de la BD (leads)
  const leadRecuperado = await recuperarLead(documento);
  console.log("leadRecuperado", leadRecuperado);

  //Recuperar los intereses de la BD (config_intereses)
  const interesRecuperado = await recuperarIntereses(documento);
  console.log("interesRecuperado", interesRecuperado);

  //Calcular el prestamo desde el backend
  //interes viene de los interes recuperados
  const calularPrestamos = calcularCuota(monto, interes, cuota)
  console.log("calularPrestamos", calularPrestamos) 

  //Enviar todo a SB
  
};
