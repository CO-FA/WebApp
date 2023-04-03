import validateLead from "./routes/validate-lead.mjs";
import express from "express";
import morgan from "morgan";

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

app.use(validateLead);

app.listen(port, () => {
  console.log(`Backend cofa app listening on port ${port}`);
});
