import express from "express";
import { update } from "../services/updateStatusNosis.js";
const router = express.Router();

router.post("/update-nosis-status", async function (req, res) {
  console.log("Req update-nosis-status", req.body);
  const response = await update(req.body);
  res.json({
    ...response,
    
  });
});

export default router;
