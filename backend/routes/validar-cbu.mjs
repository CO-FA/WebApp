import express from "express";
import { validandoCBU } from "../services/validarCBU.js";
const router = express.Router();

router.post("/validar-cbu", async function (req, res) {
  const response = await validandoCBU(req.body);
  res.json({
    ...response,
    
  });
});

export default router;
 