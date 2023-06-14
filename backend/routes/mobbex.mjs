import express from "express";
import { suscripcionMobbex } from "../services/mobbex.mjs";
const router = express.Router();

router.post("/mobbex", async function (req, res) {
  console.log("Req mobbex", req.body);
  const response = await suscripcionMobbex(req.body);
  res.json({
    ...response,
  });
  console.log("response", response)
});

export default router;
