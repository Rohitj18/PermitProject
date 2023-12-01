const express = require("express")
const User = require("../models/User")



exports.Login = async(req,res)=>{
    const{email,password}=req.body
    
    try{
        const check=await User.findOne({email:email})
        
        if(email=== check.email && password === check.password){
            check.password = null;
            res.status(200).json({
                response:"exist",
                data:check,
            })
        }
        else{
            res.status(400).json({
                response:"notexist",
                data:null,
            })
        }

    }
    catch(e){
        res.status(400).json({
            response:"notexist",
            data:null,
        })
    }
}

exports.Signup = async(req,res)=>{
    const{email,password}=req.body

    const data={
        email:email,
        password:password
    }

    try{
        const check=await User.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await User.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }
}




