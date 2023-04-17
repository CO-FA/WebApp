import { validateLead } from "../services/validate-lead.mjs";
import express from "express";
const router = express.Router();

router.post("/validate-lead", async function (req, res) {
  console.log("Req VALIDATE LEAD", req.body);
  const response = await validateLead(req.body);
  res.json({
    ...response,
  });
});

export default router;
