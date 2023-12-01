const mongoose = require("mongoose");

const RequiredDocs = new mongoose.Schema({
    formID:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"GeneralPermit"
    },
    reqDocs:{
        type:[String],
        default:[]
    },
    submitedDocs:{
         type:mongoose.Schema.Types.Mixed,
         default:{}
    }
    
},{ minimize: false });

module.exports  = mongoose.model("RequiredDocs",RequiredDocs); 