import express from "express";
import { crearPassword } from "../services/password.mjs";
const router = express.Router();

router.post("/crear-password", async function (req, res) {
  console.log("Req crear-password", req.body);
  const response = await crearPassword(req.body);
  res.json({
    ...response,
  });
  console.log("response", response)
});

export default router;
