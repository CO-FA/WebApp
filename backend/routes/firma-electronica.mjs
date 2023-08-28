import express from "express";
import { firmaElectronica } from "../services/terminosYcondiciones.mjs";
const router = express.Router();

router.post("/firma-electronica", async function (req, res) {
  const response = await firmaElectronica(req.body);
  res.json({
    ...response,
  });
});

export default router;
