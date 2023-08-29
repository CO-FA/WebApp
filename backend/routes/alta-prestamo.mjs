import express from "express";
import { altaPrestamo } from "../services/altaPrestamo";
const router = express.Router();

router.post("/alta-prestamo", async function (req, res) {
  const response = await altaPrestamo (req.body);
  res.json({
    ...response,
    
  });
});

export default router;