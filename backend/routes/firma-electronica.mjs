import express from "express";
import { firmaElectronica } from "../services/terminosYcondiciones.mjs";
const router = express.Router();

router.post("/firma-electronica", async function (req, res) {
  console.log("Req firma-electronica", req.body);
  const response = await firmaElectronica(req.body);
  res.json({
    ...response,
  });
  console.log("response", response)
});

export default router;
