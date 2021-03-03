const express = require('express');
const chalk = require('chalk');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.MAIL,
          pass: process.env.PASSWORD
        }
      });
      
      const mailOptions = {
        from: process.env.MAIL,
        to: process.env.MAIL,
        subject: 'Bot report',
        text: 'Bot report'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    res.status(200).send('Done');
});

app.listen(PORT,()=>{
    console.log(chalk.yellow.underline(`Server listening on port ${PORT}...`))
});
