const { json } = require("express");
const Form = require("../models/Form");

exports.getAllForm = async(req,res)=>{
    try {
        let {userId} = req.body;
        console.log("This is the receieved id",req.body);
        if(!userId){
            return res.status(403).json({
                success:false,
                message:"User Id is requried",
            });
        }
        const response = await Form.find({user:userId}).populate('formID').populate('requiredDocs').populate('user').exec();
        console.log("This is backend response",response);
        response.forEach((object)=>{
            object.user.password = null;
        })
        if(!response){
            return res.status(403).json({
                success:false,
                data:[],
                message:"User has not submitted any form",
            });
        }

        res.status(200).json({
            success:true,
            data:response,
            message:"succesfully fetched user forms",
        }); 


    } catch (error) {
        console.log(error);
        console.log(error.message);
        return res.status(400).json({
            success:false,
            message:"Error while fetching user forms",
        });
    }
}




exports.getAllAdminForm = async(req,res)=>{
    try {
        const {admin}= req.body;
        console.log("this is received admin",admin);
        let response = [];
        if(admin==="admin1"){
            response = await Form.find({}).populate('formID').populate('requiredDocs').populate('user').exec();
        }else if(admin==="admin2"){
            response = await Form.find({approve1:true}).populate('formID').populate('requiredDocs').populate('user').exec();
        }else{
            response = await Form.find({approve2:true}).populate('formID').populate('requiredDocs').populate('user').exec();
        }

        // console.log("This is admin backend response",response);
        response.forEach((object)=>{
            object.user.password = null;
        })

        if(!response){
            return res.status(403).json({
                success:false,
                data:[],
                message:"No forms",
            });
        }

        res.status(200).json({
            success:true,
            data:response,
            message:"succesfully fetched all forms",
        }); 


    } catch (error) {
        console.log(error);
        console.log(error.message);
        return res.status(400).json({
            success:false,
            message:"Error while fetching all forms",
        });
    }
}

exports.setApproval = async(req,res)=>{
    try {
        let {formId,admin} = req.body;
        if(!formId || !admin){
            return res.status(403).json({
                success:false,
                message:"all fields required",
            });
        }
        
        console.log("this is the recieved admin",admin);
        
        let response = null;
        if(admin==="admin1"){
            response = await Form.findOneAndUpdate({formID:formId},{approve1:true},{new:true});;
        }else if(admin==="admin2"){
            response = await Form.findOneAndUpdate({formID:formId},{approve2:true},{new:true});;
        }else{
            response = await Form.findOneAndUpdate({formID:formId},{approve3:true},{new:true});;
        }
        console.log("This is backend response",response);
        
        if(!response){
            return res.status(403).json({
                success:false,
                data:[],
                message:"cannot update the form approval",
            });
        }

        res.status(200).json({
            success:true,
            data:response,
            message:"succesfully approved form",
        }); 


    } catch (error) {
        console.log(error);
        console.log(error.message);
        return res.status(400).json({
            success:false,
            message:"Error while approving form",
        });
    }
}




