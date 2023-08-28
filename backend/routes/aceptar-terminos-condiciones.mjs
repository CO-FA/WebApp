import express from "express";
import { terminosYcondiciones } from "../services/terminosYcondiciones.mjs";
const router = express.Router();

router.post("/aceptar-terminos-condiciones", async function (req, res) {
  const response = await terminosYcondiciones(req.body);
  res.json({
    ...response,
    
  });
});

export default router;
