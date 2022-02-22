const express=require('express');
const route=express.Router();
const {FormData}=require('../models/data_inf_jnf');
route.get("/", function (req, res) {
    res.send("okk check");
  });
  route.get("/save", function (req, res) {
   
    // console.log(req.body);
     const dataInfJnf = new DataInfJnf(req.body);
     dataInfJnf.save().then(() => res.send(unique_id));

});

route.post("/update", function (req, res) {
      // const result = await
      dataInfJnf.updateOne({ unique_id:req.body.unique_id }, formData).then(() => res.send(unique_id));
 
  });

  module.exports=route