const nodemailer=require('nodemailer')

//create transporter
module.exports=nodemailer.createTransport({
    host:"smtp.gmail.com",
    port:465,
    secure:true,
    service:'gmail',
    auth:{
        user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
    }
})