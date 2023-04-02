import validateLead from "./routes/validate-lead.mjs";
import express from "express";
import morgan from "morgan";

const app = express();

const port = process.env.PORT || 3000;

//Configuraciones
app.set("port", port);
app.set("json spaces", 2);

//Middleware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    Title: "Test",
  });
});

app.use(validateLead);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
