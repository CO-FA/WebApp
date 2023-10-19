import express from "express";
import { crearPassword } from "../services/password.mjs";
const router = express.Router();

router.post("/crear-password", async function (req, res) {
  const response = await crearPassword(req.body);
  res.json({
    ...response,
  });
});

export default router;
