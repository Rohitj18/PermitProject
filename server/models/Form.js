const mongoose = require("mongoose");

const Form = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    Date:{
        type:Date,
        default:Date.now()
    },
    formID:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"GeneralPermit"
    },
    approve1:{
        type:Boolean,
        default:false
    },
    approve2:{
        type:Boolean,
        default:false
    },
    approve3:{
        type:Boolean,
        default:false
    },
    requiredDocs:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"RequiredDocs"
    },
    reqDocsSubmit:{
        type:Boolean,
        default:false
    }
});

module.exports  = mongoose.model("Form",Form); 