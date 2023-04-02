import { validateLead } from "../services/validate-lead";
const express = require("express");
const router = express.Router();

router.post("/validate-lead", async function (req, res) {
  const response = await validateLead(req.params);
  res.json({
    ...response,
  });
});

module.exports = router;
