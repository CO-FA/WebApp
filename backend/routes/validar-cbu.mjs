import express from "express";
import { validarCBU } from "../services/validarCBU";
const router = express.Router();

router.post("/validar-cbu", async function (req, res) {
  console.log("Req mobbex", req.body);
  const response = await validarCBU(req.body);
  res.json({
    ...response,
    
  });
});

export default router;
