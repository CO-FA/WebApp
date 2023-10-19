import express from "express";
import { updateDatosPrestamo } from "../services/updateDatosPrestamo.mjs";
const router = express.Router();

router.post("/update-datos-prestamo", async function (req, res) {
  const response = await updateDatosPrestamo(req.body);
  res.json({
    ...response,
  });
});

export default router;
