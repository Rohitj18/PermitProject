const RequiredDocs = require("../models/RequiredDocs");
const Form = require("../models/Form");

exports.setReqDocs = async(req,res)=>{
    try {
        let {formId,reqDocs} = req.body;
        
        if(!formId){
            return res.status(403).json({
                success:false,
                message:"all fields required",
            });
        }

        const response = await RequiredDocs.findOneAndUpdate({formID:formId},{ reqDocs: reqDocs },{ new: true });

        
        if(!response){
            return res.status(403).json({
                success:false,
                data:[],
                message:"cannot submit required form by admin",
            });
        }
        
        const formUpdateResponse =await Form.findOneAndUpdate({formID:formId},{reqDocsSubmit:true},{new:true});
        console.log("form update response",formUpdateResponse);
        if(!formUpdateResponse){
            return res.status(403).json({
                success:false,
                data:[],
                message:"Failed to Submit By admin try again",
            });
        }

        res.status(200).json({
            success:true,
            data:response,
            message:"succesfully submit required form",
        }); 


    } catch (error) {
        console.log(error);
        console.log(error.message);
        return res.status(400).json({
            success:false,
            message:"Error while submiting required form by admin ",
        });
    }
}