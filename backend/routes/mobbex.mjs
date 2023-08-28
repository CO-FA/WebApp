import express from "express";
import { suscripcionMobbex } from "../services/mobbex.mjs";
const router = express.Router();

router.post("/mobbex", async function (req, res) {
  const response = await suscripcionMobbex(req.body);
  res.json({
    ...response,
    
  });
});

export default router;
