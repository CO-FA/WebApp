import express from "express";
import { validarIdentidadNosis } from "../services/nosisValidation.mjs";
const router = express.Router();

router.post("/validar-identidad-nosis", async function (req, res) {
  console.log("Req validar-identidad-nosis", req.body);
  const response = await validarIdentidadNosis(req.body);
  res.json({
    ...response,
    
  });
});

export default router;