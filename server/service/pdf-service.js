const PDFDocument = require("pdfkit");

function buildPDF(dataCallback, endCallback, data) {
  const doc = new PDFDocument();
  const name="Name ->"+`${data.company_overview.name}`;
  const website="Website ->"+`${data.company_overview.website}`;
  const sector="Sector ->"+`${data.company_overview.sector}`;
  const overview=[name,website,sector];
  const Designation="Designation ->"+`${data.job_detail.designation}`;
  const Place_of_posting="Place of posting ->"+`${data.job_detail.place_of_posting}`;
  const Job_Description="Job Description ->"+`${data.job_detail.description}`;
  const duration="Duration ->"+`${data.job_detail.duration}`;
  const mode="Mode ->"+`${data.job_detail.mode}`;
  const job_detail=[Designation,Place_of_posting,Job_Description,duration,mode];
   const ctc= "CTC (in LPA) ->" + `${data.stipend_detail.ctc}` ;
   const ctc_breakup="CTC Breakup ->" +  `${data.stipend_detail.ctc_breakup}` ;
   const bond_detail= "Bond Details (If any) ->" + `${data.stipend_detail.bond_detail}` ;
   const stipend= "Bond Details (If any) ->" +  `${data.stipend_detail.stipend}` ;
   const ppo_provision= "PPO Provision ->" +  `${data.stipend_detail.ppo_provision}` ;
   const ctc_ppo= "CTC (PPO) ->" +  `${data.stipend_detail.ctc_ppo}` ;
   const salary_details=[ctc,ctc_breakup,bond_detail,stipend,ppo_provision,ctc_ppo];
   let name_1="Name -> ";
   let designation_1="Designation -> ";
   let email_1="Email -> ";
   let mobile_1="Mobile -> ";
   for(var i=0;i<data.contact_detail.length;i++)
   {
     name_1+=`${data.contact_detail[i].name}`;
     designation_1+=`${data.contact_detail[i].designation}`;
     email_1+=`${data.contact_detail[i].email}`;
     mobile_1+=`${data.contact_detail[i].mobile}`;
   }
  const contact_details=[name_1,designation_1,email_1,mobile_1];
  let btech=[];
  for(var i=0;i<data.eligible_branch.btech.length;i++)
  btech[i]=data.eligible_branch.btech[i];
  let dd_mtech=[];
  for(var i=0;i<data.eligible_branch.dd_mtech.length;i++)
  dd_mtech+=data.eligible_branch.dd_mtech[i];
  let msc2=[];
  for(var i=0;i<data.eligible_branch.msc2.length;i++)
  msc2+=data.eligible_branch.msc2[i];
  let msc3=[];
  for(var i=0;i<data.eligible_branch.msc3.length;i++)
  msc3+=data.eligible_branch.msc3[i];
  let mtech=[];
  for(var i=0;i<data.eligible_branch.mtech.length;i++)
  mtech+=data.eligible_branch.mtech[i];
  let mba=[];
  for(var i=0;i<data.eligible_branch.mba.length;i++)
  mba+=data.eligible_branch.mba[i];
  let phd=[];
  for(var i=0;i<data.eligible_branch.phd.length;i++)
  phd+=data.eligible_branch.phd[i];

  // const eligible_btech=
  const eligible_courses=[btech,dd_mtech,msc2,msc3,mtech,mba,phd];
  doc.on("data", dataCallback);
  doc.on("end", endCallback);
  // doc.fontSize(25).text("Some heading");

  
  
  if (data.type === "INF") {
    doc.fontSize(25).text("--INTERNSHIP NOTIFICATION FORM--", {
      align: "center",
    });
  } else {
    doc.fontSize(25).text("--PLACEMENT NOTIFICATION FORM--", {
      align: "center",
    });
  }
  doc.moveDown();

  //"COMPANY OVERVIEW"
  doc.fontSize(20).fillColor('#6765f4').text("COMPANY OVERVIEW", {
    align: "center",
  });
  doc.list(overview);
  doc.moveDown();

  
//"JOB DETAILS"
  doc.fontSize(20).text("JOB DETAILS", {
    align: "center",
  });
  doc.list(job_detail);
  doc.moveDown();


//"SALARY DETAILS"
  doc.fontSize(20).text("SALARY DETAILS", {
    align: "center",
  });
  doc.list(salary_details);
  doc.moveDown();


  //"CONTACT PERSONNEL DETAILS"
  doc.fontSize(20).text("CONTACT PERSONNEL DETAILS", {
    align: "center",
  });
  doc.list(contact_details);
  doc.moveDown();


  //"ELIGIBLE COURSES & DISCIPLINES"
  doc.fontSize(20).text("ELIGIBLE COURSES & DISCIPLINES", {
    align: "center",
  });
  doc.list(eligible_courses);
  doc.moveDown();


  //"SELECTION PROCEDURE"
  doc.fontSize(20).text("SELECTION PROCEDURE", {
    align: "center",
  });
  doc.moveDown();

  // doc.fontSize(15).text("Name", {
  //   align: 'left'
  //   }
  //   ).text(data.company_overview.name, {
  //     align: 'right'
  //     }
  //     );
  //   doc.fontSize(15).text(data.company_overview.name, {
  //     align: 'left'
  //     }
  //     );
  // const linePosition =doc.y
  // doc.text("Name", doc.x, linePosition, {align:'left'});
  // doc.text(data.company_overview.name, 300, linePosition, {align:'justify'})
  // doc.text("name"+data.company_overview.name , {
  //   width: 412,
  //   align: 'justify',
  //   indent: 30,
  //   columns: 2,
  // });

  // ellipsis: true

  //  doc.text("World", startPosition + someArbitraryDistance, linePosition, {width: 40})
  // const arr=["c++","cpp","developement"];
  // doc.list(arr)

  //     doc.fontSize(35).text(data.company_overview.name, {
  //         align: 'center'
  //       }
  //       );
  //       doc.fontSize(15).text(data.company_overview.website, {
  //         align: 'center'
  //       }
  //       );
  //       doc.fontSize(15).text(data.company_overview.sector, {
  //         align: 'center'
  //       }
  //       );

  //       doc.fontSize(25).text("JOB DETAILS", {
  //         align: 'left'
  //       }
  //       );

  doc.end();
}
module.exports = { buildPDF };


