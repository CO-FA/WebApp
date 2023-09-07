import express from "express";
import { infoPrestamo } from "../services/infoPrestamo";
const router = express.Router();

router.post("/info-prestamo", async function (req, res) {
  const response = await infoPrestamo(req.body);
  res.json({
    ...response,
  });
});

export default router;
