import validateLead from "./routes/validate-lead.mjs";
import express from "express";
import morgan from "morgan";
import { createClient } from "@supabase/supabase-js";

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

app.get("/", (req, res) => {
  res.json({
    test: "Test",
  });
});

app.post("/find-cbu", async (request, res) => {
  //TODO: BUSCAR CBU EN SUPABASE
  //004213123123123123
  const cbu = request.params.cbu;

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

app.use(validateLead);

app.listen(port, () => {
  console.log(`Backend cofa app listening on port ${port}`);
});
