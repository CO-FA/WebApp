import validateLead from "./routes/validate-lead.mjs";
import generarPreaprobado from "./routes/generar-preaprobado.mjs";
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
app.use(generarPreaprobado);

app.post("/find-cbu", async (request, res) => {
  const cbu = request.body.cbu;
  console.log("cbu", cbu);
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

//BUSCA SITUACION LABORAL EN SUPABASE
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
