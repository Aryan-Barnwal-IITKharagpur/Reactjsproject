const express=require('express');
const route=express.Router();
const FormData=require('../models/form');
var mongoose = require("mongoose")
route.get("/", function (req, res) {
    res.send("okk check");
  });
  route.get("/getAll",async function (req, res) {
    const result=await FormData.find();
    // console.log(result);
    res.send(result);
  });
  route.post("/getSome",async function (req, res) {
    const result=await FormData.find({company_user_id:req.body.company_user_id});
    // const result=await FormData.find({type:req.body.type});
    // result.getFilter();
    console.log(result.data);
    res.send(result);
  });
  route.get("/getPrevData",async function (req, res) {
    const result=await FormData.find({_id:req.body.objId});
    // const result=await FormData.find({type:req.body.type});
    // result.getFilter();
    console.log(result);
    res.send(result);
  });
  route.post("/save", function (req, res) {
    // console.log(req.body);
     
     const formData = new FormData(req.body);
     formData.save().then(() => res.send("unique_id"));
});

route.post("/update",async  function (req, res) {
      // const result = await
      await formData.updateOne({_id:req.body._id }, formData).then(() => res.send("unique_id"));
 
  });

  module.exports=route