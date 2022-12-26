const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routeUrl = require('./routes/routes')
const cors = require('cors')
const wbm = require('wbm')
var nodemailer = require('nodemailer');

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("====== Database Connected ======"))

//Middleware
app.use(express.json())
app.use(cors())
app.use('/booking', routeUrl)

// WhatsApp Message Integration
wbm.start()
.then(async () => {
    const phones = ['+16095539005'];
    const message = 'hello';
    await wbm.send(phones, message);
    await wbm.end();
})
.catch(err => console.log(err));

//E-mail message Integration 
let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
        clientId: process.env.OAUTH_CLIENTID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN
      }
	});

// Reciever
let mailOptions = {
      from: 'info@okbfoundation.org',
      to: 'apexial@aol.com',
      subject: 'Nodemailer Project',
      text: 'Hi from your nodemailer project'
    };

// Send Mail
transporter.sendMail(mailOptions, function(err, data) {
      if (err) {
        console.log("Error " + err);
      } else {
        console.log("Email sent successfully");
      }
    });



//Server + Port
app.listen(4000, () => console.log("====== Server Running ======"))