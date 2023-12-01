const express = require("express");
const router = express.Router();
const Pform = require("../controller/permitToMove");
const user = require("../controller/permitToMove");

router.post("/insert", Pform.createPform);
router.post("/testUser", user.createUser);
// Get data
router.post("/getData", Pform.getData);

module.exports = router;
