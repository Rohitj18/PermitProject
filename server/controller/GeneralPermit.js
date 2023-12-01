const GeneralPermit = require('../models/GeneralPermit');
const Form = require("../models/Form");
const RequiredDocs = require("../models/RequiredDocs");

exports.CreateForm = async(req,res)=>{
    try {
        let {formData,userId} = req.body;

        if(!formData){
            return res.status(403).json({
                success:false,
                message:"all field required",
            });
        }
    
        const response = await GeneralPermit.create({user:userId,formData:formData});
        const reqDocRes = await RequiredDocs.create({formID:response._id});
        const formRes = await Form.create({user:userId,formID:response._id,requiredDocs:reqDocRes._id});
        if(!response || !reqDocRes || !formRes){
            return res.status(403).json({
                success:false,
                message:"Could not store general permit",
            });
        }
        
        res.status(200).json({
            success:true,
            data:response,
            message:"succesfully created general permit",
        }); 


    } catch (error) {
        console.log(error);
        console.log(error.message);
        return res.status(400).json({
            success:false,
            message:"Error while storing general permit",
        });
    }
}

exports.getGeneralForm = async(req,res)=>{
    try {
        let {formId} = req.body;
        if(!formId){
            return res.status(403).json({
                success:false,
                message:"all field required",
            });
        }
    
        const response = await GeneralPermit.findById(formId);
        
        if(!response){
            return res.status(403).json({
                success:false,
                message:"Could not find the general permit",
            });
        }

        res.status(200).json({
            success:true,
            data:response,
            message:"succesfully fetched general permit",
        }); 


    } catch (error) {
        console.log(error);
        console.log(error.message);
        return res.status(400).json({
            success:false,
            message:"Error while fetching general permit",
        });
    }
}


