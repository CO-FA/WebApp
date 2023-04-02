const express = require("express");
const router = express.Router();

router.post("/validate-lead", function (req, res) {
  res.json({
    Title: "Hola mundo usando rutas!",
  });
});

module.exports = router;
