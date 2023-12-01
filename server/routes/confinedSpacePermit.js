const express = require("express");
const router = express.Router();
const form = require("../controller/confinedSpacePermit");

router.post("/submit", form.createForm);
router.post("/getRequest", form.showDetails);

module.exports = router;
