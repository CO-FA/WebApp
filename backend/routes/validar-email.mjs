import express from "express";
import { validarEmail } from "../services/email.mjs";
const router = express.Router();

router.post("/validar-email", async function (req, res) {
  const response = await validarEmail(req.body);
  res.json({
    ...response,
    
  });
});

export default router;