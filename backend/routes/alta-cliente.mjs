import express from "express";
import { altaCliente } from "../services/altaCliente.js";

const router = express.Router();

router.post("/alta-cliente", async function (req, res) {
  const response = await altaCliente(req.body);
  res.json({
    ...response,
    
  });
});

export default router;
