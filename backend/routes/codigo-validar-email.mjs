import express from "express";
import { validarCodigoEmail } from "../services/email.mjs";
const router = express.Router();

router.post("/codigo-validar-email", async function (req, res) {
  console.log("Req codigo-validar-email", req.body);
  const response = await validarCodigoEmail(req.body);
  res.json({
    ...response,
    
  });
});

export default router;