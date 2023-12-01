const mongoose = require("mongoose");

const GeneralPermit = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    Date:{
        type:Date,
        default:Date.now()
    },
    formData:{
        type:mongoose.Schema.Types.Mixed,
        require:true,
    },
    
});

module.exports  = mongoose.model("GeneralPermit",GeneralPermit); 