import express from "express";
import { infoDetalles } from "../services/infoDetalles.js";
const router = express.Router();

router.post("/info-detalles", async function (req, res) {
  const response = await infoDetalles(req.body);
  res.json({
    response,
  });
});

export default router;
