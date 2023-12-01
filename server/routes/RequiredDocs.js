const express = require("express");
const router = express.Router();

const{
    setReqDocs
} = require("../controller/RequiredDocs");

router.post("/sendReqDocs",setReqDocs);

module.exports = router;
