import express from "express";
import { getIdCliente } from "../services/getIdCliente.js";
const router = express.Router();

router.post("/get-id-cliente", async function (req, res) {
  const response = await getIdCliente(req.body);
  res.json({
    ...response,
  });
});

export default router;
