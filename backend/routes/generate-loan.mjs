import express from "express";
import { validateLoan } from "../services/validateLoan.js";
const router = express.Router();

router.post("/generate-loan", async function (req, res) {
  const response = await validateLoan(req.body);
  res.json({
    response,
  });
});

export default router;
