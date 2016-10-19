var nodemailer = require('nodemailer');

// this should go in the config folder in a file called email config
var smtpConfig = {
    host: 'smtp.mail.yahoo.com',
    port: 465,
    secure: true, // use SSL 
    auth: {
        user: 'handshakeapp@yahoo.com',
        pass: 'uclabootcamp1'
    }
};
 
// create reusable transporter object using the default SMTP transport 
// We only create this once
var transporter = nodemailer.createTransport(smtpConfig);
 

 // Below is the function.  need to update to:email
 
// setup e-mail data with unicode symbols 
var mailOptions = {
    from: '"Handshake 👍" <handshakeapp@yahoo.com>', // sender address 
    to: 'iniezen@gmail.com', // list of receivers 
    subject: 'Your HandShake Trade ✔', // Subject line 
    text: 'You Have Received A Handshake for a Trade 👍', // plaintext body 
    html: '<b>Here Is The Trade Request👍</b>' // html body 
};
 
// send mail with defined transport object 
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});