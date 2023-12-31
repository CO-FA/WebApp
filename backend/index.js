const express = require("express");
const app = express();
const morgan = require("morgan");
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
    Title: "Hola mundo",
  });
});

app.use(require("./routes/validate-lead"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
