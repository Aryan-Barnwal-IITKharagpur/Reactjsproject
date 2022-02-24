const PDFDocument = require("pdfkit");

function buildPDF(dataCallback, endCallback, data) {
  const doc = new PDFDocument({autoFirstPage: false});
  doc.addPage({
    margins: {
    top: 40,
    bottom: 0,
    left: 40,
    right: 40
    }
   });




  doc.on("data", dataCallback);
  doc.on("end", endCallback);
  // doc.on('pageAdded', () => doc.text("Page Title"));
  // doc.fontSize(25).text("Some heading");

  
  if (data.type === "INF") {
doc.fillColor('#678374')
doc.font('Helvetica-Bold')
    doc.fontSize(25).text("INTERNSHIP NOTIFICATION FORM", {
      align: "center",
    });
  } else {
    doc.fillColor('#678374')
    doc.fontSize(25).text("PLACEMENT NOTIFICATION FORM", {
      align: "center",
    });
  }
  doc.moveDown();
  doc.moveTo(0, doc.y)                               // set the current point
  .lineTo(800, doc.y)                            // draw a line                          // draw another line
  .stroke();  
        
  doc.moveDown();

  doc.font('Helvetica-Bold')

  
  function make_doc(main_heading,keys,values)
  {

    doc.x=40;
    console.log("x=",doc.x)
    doc.font('Helvetica-Bold');
    doc.fontSize(18).fillColor('#000000');
    doc.text(main_heading)
    doc.moveDown();
    doc.fontSize(16).fillColor('#5AA1AF');
    for(var i=0;i<keys.length;i++)
    {
      let y=doc.y;
    
      doc.text(keys[i],40,y,{
        lineBreak:false
      })
      console.log(doc.x);
      var x=(doc.page.width/2)>doc.x?doc.page.width/2:doc.x;
      doc.moveDown();
      doc.text(":",x,y ,{

      })
      doc.moveDown();
      // ,{
      //   align:"center"
      // }
      // console.log(doc.y);
      doc.text(values[i],x+10,y,{
      
      })
      // doc.page.width
      doc.moveDown();
    }
    
    doc.moveTo(0, doc.y)            
    .lineTo(800, doc.y)                           
    .stroke();  
    doc.moveDown();
    doc.x=40;
    // doc.list(overview,{'bulletRadius':3});
  }
  //Company OverView
  let keys=["Name","Sector/Industry","Website"];
  let values=[data.company_overview.name,data.company_overview.sector,data.company_overview.website] ;
  let main_heading="Company Overview"
  make_doc(main_heading,keys,values);

//"JOB DETAILS"
   keys=["Designation","Place of posting","Job Description","Duration","Mode"];
   values=[data.job_detail.designation,data.job_detail.place_of_posting,data.job_detail.description,data.job_detail.duration,data.job_detail.mode] ;
   main_heading="JOB DETAILS"
  make_doc(main_heading,keys,values);

  
  //"SALARY DETAILS"
  if(data.type=='INF')
  {
    keys=["Stipend","PPO Provision ","CTC (PPO)"];
    values=[data.stipend_detail.stipend,data.stipend_detail.ppo_provision,data.stipend_detail.ctc_ppo];
    main_heading="STIPEND DETAILS"
  }
  else
  {
    keys=["CTC (in LPA) ","CTC Breakup ","Bond Details (If any)"];
    values=[data.stipend_detail.ctc,data.stipend_detail.ctc_breakup,data.stipend_detail.bond_detail];
    main_heading="SALARY DETAILS"
  }
 make_doc(main_heading,keys,values);
 doc.addPage()

  //"CONTACT PERSONNEL DETAILS"
  doc.font('Helvetica-Bold');
  doc.fontSize(18).fillColor('#000000');
  doc.text("CONTACT PERSONNEL DETAILS",{align:'left'})
  doc.moveDown();
  keys=["Name ","Designation","Email","Mobile"];
  values=[data.contact_detail[0].name,data.contact_detail[0].designation,data.contact_detail[0].email,data.contact_detail[0].mobile] ;
  main_heading="Primary Contact"
 make_doc(main_heading,keys,values);

 if(data.contact_detail.length>1)
 {
  keys=["Name ","Designation","Email","Mobile"];
  values=[data.contact_detail[1].name,data.contact_detail[1].designation,data.contact_detail[1].email,data.contact_detail[1].mobile] ;
 main_heading="Secondary Contact"
make_doc(main_heading,keys,values);
}



  //"ELIGIBLE COURSES & DISCIPLINES"
  doc.fontSize(18).text("ELIGIBLE COURSES & DISCIPLINES", {
    align: "center",
  });
  doc.moveDown();
  doc.fontSize(16)
  function listing( heading,listArray)
  {

    doc.fillColor('#333333')
    doc.text(heading,{align:'left'})
    doc.moveDown();
    doc.fillColor('#5AA1AF');
    doc.list(listArray,{bulletRadius:3});
    doc.moveDown();
  }
 
listing("4-Year B. Tech Programs",data.eligible_branch.btech)
listing("5-Year Dual Degree/ Integrated M. Tech Programs",data.eligible_branch.dd_mtech)
listing("3-Year MSc. Tech Programs",data.eligible_branch.msc2)
listing("2-Year M. Tech Programs",data.eligible_branch.msc3)
listing("2-Year MBA Programs",data.eligible_branch.mtech)
listing("2-Year M.Sc. Programs",data.eligible_branch.mba)
listing("PhD Programs",data.eligible_branch.phd)

doc.moveTo(0, doc.y)            
.lineTo(800, doc.y)                           
.stroke();  
doc.moveDown();



  // "SELECTION PROCEDURE"
  keys=["Resume Shortlisting","Type of Test","Other Qualification Rounds","Total number of rounds","N0. of offers available for IIT(ISM) students","Eligibility Criteria (if any)"];
  values=[data.selection_pr.resume_short_listing,data.selection_pr.type_of_test,data.selection_pr.other_round,data.selection_pr.total_rounds,data.selection_pr.no_of_offers,data.selection_pr.eligible_criteria] ;
  main_heading="SELECTION PROCEDURE"
 make_doc(main_heading,keys,values);

 //SKILL BASED HIRING
 listing("SKILL BASED HIRING",data.skill_based)

  doc.end();
}
module.exports = { buildPDF };


 // const name="Name ->"+`${data.company_overview.name}`;
  // const website="Website ->"+`${data.company_overview.website}`;
  // const sector="Sector ->"+`${data.company_overview.sector}`;
  // const overview=[name,website,sector];
  // const Designation="Designation ->"+`${data.job_detail.designation}`;
  // const Place_of_posting="Place of posting ->"+`${data.job_detail.place_of_posting}`;
  // const Job_Description="Job Description ->"+`${data.job_detail.description}`;
  // const duration="Duration ->"+`${data.job_detail.duration}`;
  // const mode="Mode ->"+`${data.job_detail.mode}`;
  // const job_detail=[Designation,Place_of_posting,Job_Description,duration,mode];
  //  const ctc= "CTC (in LPA) ->" + `${data.stipend_detail.ctc}` ;
  //  const ctc_breakup="CTC Breakup ->" +  `${data.stipend_detail.ctc_breakup}` ;
  //  const bond_detail= "Bond Details (If any) ->" + `${data.stipend_detail.bond_detail}` ;
  //  const stipend= "Bond Details (If any) ->" +  `${data.stipend_detail.stipend}` ;
  //  const ppo_provision= "PPO Provision ->" +  `${data.stipend_detail.ppo_provision}` ;
  //  const ctc_ppo= "CTC (PPO) ->" +  `${data.stipend_detail.ctc_ppo}` ;
  //  const salary_details=[ctc,ctc_breakup,bond_detail,stipend,ppo_provision,ctc_ppo];
  //  let name_1="Name -> ";
  //  let designation_1="Designation -> ";
  //  let email_1="Email -> ";
  //  let mobile_1="Mobile -> ";
  //  for(var i=0;i<data.contact_detail.length;i++)
  //  {
  //    name_1+=`${data.contact_detail[i].name}`;
  //    designation_1+=`${data.contact_detail[i].designation}`;
  //    email_1+=`${data.contact_detail[i].email}`;
  //    mobile_1+=`${data.contact_detail[i].mobile}`;
  //  }
  // const contact_details=[name_1,designation_1,email_1,mobile_1];
  // let btech=[];
  // for(var i=0;i<data.eligible_branch.btech.length;i++)
  // btech[i]=data.eligible_branch.btech[i];
  // let dd_mtech=[];
  // for(var i=0;i<data.eligible_branch.dd_mtech.length;i++)
  // dd_mtech+=data.eligible_branch.dd_mtech[i];
  // let msc2=[];
  // for(var i=0;i<data.eligible_branch.msc2.length;i++)
  // msc2+=data.eligible_branch.msc2[i];
  // let msc3=[];
  // for(var i=0;i<data.eligible_branch.msc3.length;i++)
  // msc3+=data.eligible_branch.msc3[i];
  // let mtech=[];
  // for(var i=0;i<data.eligible_branch.mtech.length;i++)
  // mtech+=data.eligible_branch.mtech[i];
  // let mba=[];
  // for(var i=0;i<data.eligible_branch.mba.length;i++)
  // mba+=data.eligible_branch.mba[i];
  // let phd=[];
  // for(var i=0;i<data.eligible_branch.phd.length;i++)
  // phd+=data.eligible_branch.phd[i];

  // // const eligible_btech=
  // const eligible_courses=[btech,dd_mtech,msc2,msc3,mtech,mba,phd];

