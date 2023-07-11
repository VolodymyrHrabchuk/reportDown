const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const fs = require("fs");
const path = require("path");
const _dirname = path.dirname("")
const buildPath = path.join(_dirname, "../client/build");
const template = fs.readFileSync(path.join(`./`, "mail.html"), "utf-8");
let hbs = require("nodemailer-express-handlebars");

require("dotenv").config();

app.use(cors());
app.use(express.static(buildPath));
app.use(express.json());
// app.use(cors({ origin: `${process.env.CLIENT_URL}` }));

app.post("/send_email", async (req, res) => {
  try {
    const { fullName, email, phone, message } = req.body;
    sendMail(fullName, email, phone, message);
    res.json({ msg: "Message sent successfully" });
  } catch (error) {
    res.status(500).json({ msg: "Error" });
  }
});

function sendMail(fullName, email, phone, message) {
  return new Promise((resolve, reject) => {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    transporter.use(
      "compile",
      hbs({
        viewEngine: {
          extName: ".hbs",
          partialsDir: "views/",
          layoutsDir: "views/",
          defaultLayout: "template.hbs",
        },
        viewPath: "views/",
        extName: ".hbs",
      })
    );

    const mail_configs = {
      from: `ReportDown411 <{process.env.GMAIL_USER}`,
      to: process.env.SEND_TO,
      subject: "Message from ReportDown411",
      template: "template",
      context: { fullName, email, phone, message },
    };

    transporter.sendMail(mail_configs, function (error, info) {
      if (error) {
        console.error(error);
        return reject({ message: `An arror has accured` });
      }
      return resolve({ message: `Email sent successfully` });
    });
  });
}

app.get("/", (req, res) => {
  sendMail()
  .then((response) => res.send(response.message))
  .catch((error) => res.status(500).send(error.message));
});


app.listen(port, () => console.log(`Example app listening on port ${port}`));