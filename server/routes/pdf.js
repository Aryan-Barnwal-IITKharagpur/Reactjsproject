const express = require("express");
const route = express.Router();
const path = require("path");
const PDFDocument = require("pdfkit");
const fs = require("fs");
const { google } = require("googleapis");
const pdfService = require("../service/pdf-service");
route.get("/", function (req, res) {
  res.send("okk");
});

// route.post("/uploadTodrive", async function (req, res) {
 
// });

route.post("/download", function (req, res) {
  const stream = res.writeHead(200, {
    "Content-Type": "application/pdf",
    "Content-Disposition": "attachment;filename=invoice.pdf",
  });
  pdfService.buildPDF(
    (chunk) => {
      stream.write(chunk);
      // console.log(chunk);
    },
    () => {
      stream.end();
      // console.log(stream);
    },
    req.body
  );
});

route.post("/uploadToDrive", async function (req, res) {
  const CLIENT_ID =
    "566774882475-lnodlg2brm4tu3r71s9hin3m6l52eaek.apps.googleusercontent.com";
  const CLIENT_SECRET = "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";
  const REDIRECT_URI = "https://developers.google.com/oauthplayground";
  const REFRESH_TOKEN =
    "1//04PbLbl35100sCgYIARAAGAQSNwF-L9IrCjbu7FP6Uec9MdpP-3_ytelx1Tou0suecRi03RUBfshp9at-E7j_sHFu2Jeia7VkeXM";

  const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
  );
  oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
  // fs.unlink('./file1.pdf', function (err) {
  //   if (err) throw err;
  //   console.log('File deleted!');
  // });
  const drive = google.drive({
    version: "v3",
    auth: oauth2Client,
  });

  const filePath = path.join(__dirname, "../exp-4.pdf");
 async function make_pdf(data) {
  const doc = new PDFDocument({autoFirstPage: false});
    doc.pipe(fs.createWriteStream(`invoice.${req.body.unique_id}.pdf`));

    doc.addPage({
      margins: {
      top: 40,
      bottom: 0,
      left: 40,
      right: 40
      }
     });
  
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


// DOC ENDS




    return `invoice.${req.body.unique_id}.pdf`;
  }
  async function uploadFile(file_name) {
    // res.send(filePath);
    const filePath=`./invoice.${req.body.unique_id}.pdf`
    try {
      const response = await drive.files.create({
        requestBody: {
          name: `invoice.${req.body.unique_id}.pdf`,//comapany_name_inf/jnf
          mimeType: "application/pdf",
        },
        media: {
          mimeType: "application/pdf",
          // body:fs.createReadStream("./exp-4.pdf")
          body: fs.createReadStream(filePath),
        },
      });
      // res.send(response.data); //contains id
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
  // uploadFile();
  async function deleteFromserver() {
    fs.unlink(`invoice.${req.body.unique_id}.pdf`, function (err) {
    if (err) throw err;
    console.log('File deleted!');
  });
}

  //delete file
  async function deleteFile(pdf_id) {
    try {
      const response = await drive.files.delete({
        // fileId: "1yIBvkihsGzkikOQ8PCHBqW5FTZWoRzP1", //get pdf file id from database
         fileId: `${pdf_id}`
      });
      // res.send(response.data, response.status);
    } catch (error) {
      // res.send(error.message);
      console.log(error);
    }
  }
  // 1L5VicFdE1qR7RToUjGj3THhF1tcppnGV
  // deleteFile();
  async function generateUrl(pdf_id) {
    try {
      // const fileId = "1L5VicFdE1qR7RToUjGj3THhF1tcppnGV";
      const fileId = `${pdf_id}`;
      await drive.permissions.create({
        fileId: fileId,
        requestBody: {
          role: "reader",
          type: "anyone",
        },
      });
      const result = await drive.files.get({
        fileId: fileId,
        fields: "webViewLink , webContentLink",
      });
      console.log(result);
      return result.data;
      // res.send(result.data);
    } catch (error) {
      console.log(error.message);
      return error.message;
      // res.send(error.message);
    }
  }
  if(false)
  await deleteFile(pdf_id);
  const file_name=await make_pdf(req.body);
  const data =await uploadFile(file_name);
  const pdf_id=data.id;
  const url= await generateUrl(pdf_id);
  await deleteFromserver();
  res.send({url,pdf_id});
  
  // 
  // res.send(file_name);
  // res.send("done");
//   const pdf_id=data.id;
  // await deleteFile(pdf_id);
//  const url= await generateUrl();
//  res.send({url:url})
});

module.exports = route;
