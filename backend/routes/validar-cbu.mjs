import express from "express";
import { validandoCBU } from "../services/validarCBU.js";
const router = express.Router();

router.post("/validar-cbu", async function (req, res) {
  console.log("Req validar-cbu", req.body);
  const response = await validandoCBU(req.body);
  res.json({
    ...response,
    
  });
});

export default router;
 