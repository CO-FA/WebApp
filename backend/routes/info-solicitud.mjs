import express from "express";
import { infoSolicitud } from "../services/infoSolicitud.js";
const router = express.Router();

router.post("/info-solicitud", async function (req, res) {
  const response = await infoSolicitud(req.body);
  res.json({
    ...response,
  });
});

export default router;
