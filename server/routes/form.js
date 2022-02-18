const express=require('express');
const route=express.Router();
const {FormData}=require('../models/data_inf_jnf');
route.get("/", function (req, res) {
    res.send("okk check");
  });
  route.get("/save", function (req, res) {
   
    console.log(req.body);

      // const formData = new FormData({

  //     type: "Strin",
  //     company_overview: {
  //       name: "Strin",
  //       website: "Strin",
  //       sector: "Strin",
  //     },
  //     job_detail: {
  //       designation: "Strin",
  //       place_of_posting:"Strin",
  //       description: "Strin",
  //       duration: "Strin",
  //       mode: "Strin",
  //     },
  //     stipend_detail: {
  //       ctc:"Strin",
  //       ctc_breakup: "Strin",
  //       bond_detail:"Strin",
  //       stipend: "Strin",
  //       ppo_provision: "Strin",
  //       ctc_ppo: "Strin",
  //     },
  //     contact_detail: [
  //       {
  //         name: "Strin",
  //         designation:"Strin",
  //         email:"Strin",
  //         mobile: "Strin",
  //       },
  //     ],
  //     eligible_btech: {
  //       btech: ["Strin"],
  //       dd_mtech: ["Strin"],
  //       msc2:  ["Strin"],
  //       msc3:  ["Strin"],
  //       mtech: ["Strin"],
  //       mba:  ["Strin"],
  //       phd:  ["Strin"],
  //     },
  //     skill_based:  ["Strin"],
  //     selection_pr: {
  //       resume_short_listing: 1,
  //       type_of_test: "Strin" ,
  //       other_round: ["Strin"],
  //     },
  //     total_rounds:4,
  //     no_of_offers:"Strin",
  //     eligible_criteria:"Strin",
  //     doc_link: "Strin",
  //   });
     const formData = new FormData(req.body);
     formData.save().then(() => res.send(formData));

});

route.post("/update", function (req, res) {
    const formData = new FormData({
        type: "Strin",
        company_overview: {
          name: "Strin",
          website: "Strin",
          sector: "Strin",
        },
        job_detail: {
          designation: "Strin",
          place_of_posting:"Strin",
          description: "Strin",
          duration: "Strin",
          mode: "Strin",
        },
        stipend_detail: {
          ctc:"Strin",
          ctc_breakup: "Strin",
          bond_detail:"Strin",
          stipend: "Strin",
          ppo_provision: "Strin",
          ctc_ppo: "Strin",
        },
        contact_detail: [
          {
            name: "Strin",
            designation:"Strin",
            email:"Strin",
            mobile: "Strin",
          },
        ],
        eligible_btech: {
          btech: ["Strin"],
          dd_mtech: ["Strin"],
          msc2:  ["Strin"],
          msc3:  ["Strin"],
          mtech: ["Strin"],
          mba:  ["Strin"],
          phd:  ["Strin"],
        },
        skill_based:  ["Strin"],
        selection_pr: {
          resume_short_listing: 1,
          type_of_test: "Strin" ,
          other_round: ["Strin"],
        },
        total_rounds:4,
        no_of_offers:"Strin",
        eligible_criteria:"Strin",
        doc_link: "Strin",
      });
      // const result = await
        FormData.updateOne({ unique_id:req.body.unique_id }, formData).then(()=>res.send("assn"));
 
  });

  module.exports=route