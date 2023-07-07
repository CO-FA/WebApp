import express from "express";
import { validarEmail } from "../services/email.mjs";
const router = express.Router();

router.post("/validar-email", async function (req, res) {
  console.log("Req validar-email", req.body);
  const response = await validarEmail(req.body);
  res.json({
    ...response,
    
  });
});

export default router;