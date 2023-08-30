import validateLead from "./routes/validate-lead.mjs";
import updateDatosPrestamo from "./routes/update-datos-prestamo.mjs";
import crearPassword from "./routes/crear-password.mjs"
import suscripcionMobbex from "./routes/mobbex.mjs"
import validarEmail from "./routes/validar-email.mjs";
import validarCodigoEmail from "./routes/codigo-validar-email.mjs";
import validarIdentidadNosis from "./routes/validar-identidad-nosis.mjs";
import terminosYcondiciones from "./routes/aceptar-terminos-condiciones.mjs";
import validandoCBU from "./routes/validar-cbu.mjs"
import update from "./routes/update-nosis-status.mjs"
import firmaElectronica from "./routes/firma-electronica.mjs"
import altaPrestamo from "./routes/alta-prestamo.mjs"
import express from "express";
import morgan from "morgan";
import cors from "cors";
import { createClient } from "@supabase/supabase-js";


//import { validateLead } from "./services/validate-lead.mjs";

const supabaseUrl = process.env.SUPABASE_URL;
const supabase = createClient(supabaseUrl, process.env.SUPABASE_KEY);

const app = express();

const port = process.env.PORT || 3000;

//Configuraciones
app.set("port", port);
app.set("json spaces", 2);

//Middleware
app.use(morgan("combined"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({
    test: "Test",
  });
});

app.use(validateLead);
app.use(updateDatosPrestamo);
app.use(crearPassword)
app.use(validandoCBU)
app.use(suscripcionMobbex)
app.use(validarEmail)
app.use(validarCodigoEmail)
app.use(validarIdentidadNosis)
app.use(update)
app.use(terminosYcondiciones)
app.use(firmaElectronica)
app.use(altaPrestamo)

app.post("/find-cbu", async (request, res) => {
  const cbu = request.body.cbu;
  let { data: bancos_cbus, error } = await supabase
    .from("bancos_cbus")
    .select("*");

  const bancoResponse = bancos_cbus.find((banco) => {
    return `${cbu}`.startsWith(banco.start_with);
  });

  res.json({
    data: bancoResponse,
    error: error,
  });
});

app.listen(port, () => {
  console.log(`Backend cofa app listening on port ${port}`);
});

app.get("/situaciones", async (req, res) => {
  let { data: situacion_laboral, error } = await supabase
    .from("situacion_laboral")
    .select("*");

  const data = situacion_laboral.map((sit) => {
    return { id: sit.id, descripcion: sit.descripcion };
  });
  res.json({
    data: data,
    error: error,
  });
});

app.get("/dia-vencimiento", async (req, res) => {
  let { data: dia_vencimiento_cuota, error } = await supabase
    .from('dia_vencimiento_cuota')
    .select('*')
  const data = dia_vencimiento_cuota.map((sit) => {
    return { id: sit.id, descripcion: sit.descripcion };
  });
  res.json({
    data: data,
    error: error,
  });
});
