import { validateLead } from "../services/validate-lead.mjs";
import express from "express";
const router = express.Router();

router.post("/validate-lead", async function (req, res) {
  const response = await validateLead(req.params);
  res.json({
    ...response,
  });
});

export default router;
