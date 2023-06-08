import express from "express";
import { updateDatosPrestamo } from "../services/updateDatosPrestamo.mjs";
const router = express.Router();

router.post("/update-datos-prestamo", async function (req, res) {
  console.log("Req Update datos prestamo", req.body);
  const response = await updateDatosPrestamo(req.body);
  res.json({
    ...response,
  });
  console.log("response", response)
});

export default router;
