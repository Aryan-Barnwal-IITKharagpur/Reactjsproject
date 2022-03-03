const express = require("express");
const route = express.Router();
const make_pdf=require('../service/make_pdf');
var passport = require('passport');
var jwt = require('jsonwebtoken');
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

// route.post("/download", function (req, res) {
//   const stream = res.writeHead(200, {
//     "Content-Type": "application/pdf",
//     "Content-Disposition": "attachment;filename=invoice.pdf",
//   });
//   pdfService.buildPDF(
//     (chunk) => {
//       stream.write(chunk);
//       // console.log(chunk);
//     },
//     () => {
//       stream.end();
//       // console.log(stream);
//     },
//     req.body
//   );
// });

route.post("/uploadToDrive/:receiver/:procedure", async function (req, res) {

  const type = req.body.type;
  const receiver = req.params.receiver;
  // console.log()
  const procedure = req.params.procedure;
  // console.log(req.body);
  const CLIENT_ID = process.env.CLIENT_ID;
  // "566774882475-lnodlg2brm4tu3r71s9hin3m6l52eaek.apps.googleusercontent.com";
  const CLIENT_SECRET = process.env.CLIENT_SECRET;
  const REDIRECT_URI = process.env.REDIRECT_URI;
  const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

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

  // const filePath = path.join(__dirname, "../exp-4.pdf");
  async function uploadFile(file_name, duration,type, parents) {
    // res.send(filePath);
    // const filePath=`./invoice.${req.body.unique_id}.pdf`

    const filePath = `./${file_name}`;
    console.log(file_name)
    try {
      const response = await drive.files.create({
        requestBody: {
          name: file_name,
          mimeType: "application/pdf",
          parents: [parents]
        },
        media: {
          mimeType: "application/pdf",
          // body:fs.createReadStream("./exp-4.pdf")
          body: fs.createReadStream(file_name)
        },
      });
      // res.send(response.data); //contains id
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
  // uploadFile();
  async function deleteFromserver(file_name) {
    fs.unlink(file_name, function (err) {
      if (err) throw err;
      console.log('File deleted!');
    });
  }

  //delete file
  async function deleteFile(pdf_id, parents) {
    try {
      const response = await drive.files.delete({
        // fileId: "1yIBvkihsGzkikOQ8PCHBqW5FTZWoRzP1", //get pdf file id from database
        fileId: `${pdf_id}`,
        parents: [parents]
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
      // console.log(result);
      return result.data;
      // res.send(result.data);
    } catch (error) {
      console.log(error.message);
      return error.message;
      // res.send(error.message);
    }
  }
  const category1 = "Jan - June 2022: Dual Degree/ Integrated M. Tech courses only (2022 batch)";
  const category2 = "May - July 2022: Pre-final year students of ALL courses (2023 batch)";
  const category3 = "July - Dec 2022: M. Tech/ MBA – Business Analytics courses only (2023 batch)";

  let parents = "";
  let duration = 0;
  if (receiver == "cdc") {
    if (duration == 2)
      parents = "1XKRrnIU7c0j7c3JAvwqHEpJ1APaS5hRy"
    if (duration == 6)
      parents = "1XQEAGvlLjCHJHD5SWrKTYs1SGpdBVGU0"
    else
      parents = "1gDsSe46277uV2IIUF6CE3TgS66niCGyD"
  }
  else {
    if (duration == 2)
      parents = "17doTuc9S7wgT-0Ai0lholyxSCLhI_IUT"
    if (duration == 6)
      parents = "1c9HIKazQ4lstIt6yRyIyTY2Z2PMR0XRv"
    else
      parents = "1O4roOPxvu4rSwcy25LDm56kWLGg3HjqH"
  }


  if (procedure === "update") {
    if (receiver === "cdc") {
      await deleteFile(req.body.pdf_id, parents);
    }
    else {
      await deleteFile(req.body.pdf_id_student, parents);
    }

  }

  let data = {};
  const file_name = await make_pdf(req.body,receiver);
  console.log(file_name)
  if (req.body.type === "INF" && (req.body.job_detail.duration.includes(category1) || req.body.job_detail.duration.includes(category3)))
    data = await uploadFile(file_name, 6, parents);
  else if (req.body.type === "INF")
    data = await uploadFile(file_name, 2, "INF", parents);
  else
    data = await uploadFile(file_name, 0, "JNF", parents);

    console.log("data from upload file=",data)
  const pdf_id = data.id;
  const url = await generateUrl(pdf_id);
  console.log(url);
  await deleteFromserver(file_name);
  res.send({ url, pdf_id });

  // 
  // res.send(file_name);
  // res.send("done");
  //   const pdf_id=data.id;
  // await deleteFile(pdf_id);
  //  const url= await generateUrl();
  //  res.send({url:url})
});

module.exports = route;
