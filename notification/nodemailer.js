var nodemailer = require('nodemailer');

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
var transporter = nodemailer.createTransport(smtpConfig);
    //'smtps://user%40gmail.com:pass@smtp.gmail.com');
 
     var mailOptions1 = {
        from: '"Handshake 👍" <handshakeapp@yahoo.com>', // sender address 
        to: "iniezen@gmail.com", // list of receivers 
        subject: 'Your HandShake Trade ✔', // Subject line 
        text: 'You Have Received A Handshake for a Trade 👍', // plaintext body 
        html: '<b>You Have Received A Handshake for a Trade!👍</b>' // html body 
      };
 
      // send mail with defined transport object 
      transporter.sendMail(mailOptions1, function(error, info){
          if(error){
              return console.log(error);
          }
          console.log('Message sent: ' + info.response);
      });

      var mailOptions2 = {
        from: '"Handshake 👍" <handshakeapp@yahoo.com>', // sender address 
        to: "iniezen@hotmail.com", // list of receivers 
        subject: 'Your HandShake Trade ✔', // Subject line 
        text: 'You Have Sent A Handshake for a Trade 👍', // plaintext body 
        html: '<b>You Have Sent A Handshake Trade Request!👍</b>' // html body 
      };
 
      // send mail with defined transport object 
      transporter.sendMail(mailOptions2, function(error, info){
          if(error){
              return console.log(error);
          }
          console.log('Message sent: ' + info.response);
      });