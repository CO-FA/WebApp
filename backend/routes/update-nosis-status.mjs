import express from "express";
import { actualizarStatusNosis } from "../services/updateStatusNosis";
const router = express.Router();

router.post("/update-nosis-status", async function (req, res) {
  console.log("Req update-nosis-status", req.body);
  const response = await actualizarStatusNosis(req.body);
  res.json({
    ...response,
    
  });
});

export default router;
