import express from "express";
import { statusFirmaElectronica } from "../services/statusFirmaElectronica";
const router = express.Router();

router.post("/status-firma-electronica", async function (req, res) {
  const response = await statusFirmaElectronica(req.body);
  res.json({
    ...response,
  });
});

export default router;
