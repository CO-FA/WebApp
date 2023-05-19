import express from "express";
import { generarPreaprobado } from "../services/generarPreaprobado.mjs";
const router = express.Router();

router.post("/generar-preaprobado", async function (req, res) {
  console.log("Req Generar preaprobado", req.body);
  const response = await generarPreaprobado(req.body);
  res.json({
    ...response,
  });
});

export default router;
