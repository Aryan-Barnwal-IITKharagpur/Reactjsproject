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

// route.post("/download", function (req, res) {
//   const stream = res.writeHead(200, {
//     "Content-Type": "application/pdf",
//     "Content-Disposition": "attachment;filename=invoice.pdf",
//   });
//   pdfService.buildPDF(
//     (chunk) => {
//       stream.write(chunk);
//       console.log(chunk);
//     },
//     () => {
//       stream.end();
//       console.log(stream);
//     },
//     req.body
//   );
// });

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
 async function make_pdf() {
    const doc = new PDFDocument();
    doc.pipe(fs.createWriteStream(`invoice.${req.body.unique_id}.pdf`));
    doc
      .addPage()
      .fontSize(25)
      .text("Here is some vector graphics...", 100, 100);

    // Draw a triangle
    doc
      .save()
      .moveTo(100, 150)
      .lineTo(100, 250)
      .lineTo(200, 250)
      .fill("#FF3300");

    doc
      .addPage()
      .fillColor("blue")
      .text("Here is a link!", 100, 100)
      .underline(100, 100, 160, 27, { color: "#0000FF" })
      .link(100, 100, 160, 27, "http://google.com/");
    doc.end();
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
  const file_name=await make_pdf();
  const data =await uploadFile(file_name);
  const pdf_id=data.id;
  const url= await generateUrl(pdf_id);
  res.send(url);
  // await deleteFromserver();
  // 
  // res.send(file_name);
  // res.send("done");
//   const pdf_id=data.id;
  // await deleteFile(pdf_id);
//  const url= await generateUrl();
//  res.send({url:url})
});

module.exports = route;
