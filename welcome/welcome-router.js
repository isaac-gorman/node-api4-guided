const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    message: `Welcome ${process.env.COHORT}`,
    fun_fact: `Did you know that... ${process.env.FUN_FACT} || there are no muscles in your fingers`,
  });
});

module.exports = router;
