const express = require("express");
const router = express.Router();


const{
    CreateForm,getGeneralForm
} = require("../controller/GeneralPermit");


router.post("/createGeneralPermit",CreateForm);
router.post("/getGeneralPermit",getGeneralForm);

module.exports = router;
