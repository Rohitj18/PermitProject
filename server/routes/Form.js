const express = require("express");
const router = express.Router();


const{
    getAllForm,setApproval,getAllAdminForm
} = require("../controller/Form");


router.post("/getAllForms",getAllForm);
router.post("/setApproval",setApproval);
router.post("/getAllAdminForm",getAllAdminForm);

module.exports = router;
