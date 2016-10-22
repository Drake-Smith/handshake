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







$("#tradeConfirm").on("click", function(){
    var buyer = $('input[name="offer"]:checked', '#offerForm').attr("data-user");
    var seller = $('input[name="request"]:checked', '#requestForm').attr("data-user");
    var buyer_product = $('input[name="offer"]:checked', '#offerForm').attr("data-id");
    var seller_product = $('input[name="request"]:checked', '#requestForm').attr("data-id");
    var buyer_email = $('input[name="offer"]:checked', '#offerForm').attr("data-id");
    var seller_email = $('input[name="request"]:checked', '#requestForm').attr("data-id");
        $.ajax({
            url: '/trade/create', 
            type: 'POST', 
            dataType: 'json', 
            data: {
              buyer: buyer,
              seller: seller,
              buyer_product: buyer_product,
              seller_product: seller_product
            }
        });

     var mailOptions1 = {
        from: '"Handshake 👍" <handshakeapp@yahoo.com>', // sender address 
        to: "iniezen@gmail.com", // list of receivers 
        subject: 'Your HandShake Trade ✔', // Subject line 
        text: 'You Have Received A Handshake for a Trade 👍', // plaintext body 
        html: '<b>Here Is The Trade Request Link👍</b>' // html body 
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
        html: '<b>Here Is The Trade Request Link👍</b>' // html body 
      };
 
      // send mail with defined transport object 
      transporter.sendMail(mailOptions2, function(error, info){
          if(error){
              return console.log(error);
          }
          console.log('Message sent: ' + info.response);
      });
   
    });