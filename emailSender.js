const nodeMailer = require ('nodemailer')

exports.sendMail = async(option) =>{
    //Create a transporter object
    const transporter = nodeMailer.createTransport({
        host:process.env.SMTP_HOST,
        port:process.env.SMTP_PORT,
        auth:{
            user:process.env.SMTP_USER,
            pass:process.env.SMTP_PASSWORD

        }

    })
   // Data
   const mailOptions = {
       from:`${option.name} ${option.email}`,
       to: process.env.YOUR_EMAIL,
       subject: `Contact Us Form- ${option.subject}`,
       html:option.message
   }
   await transporter.sendMail(mailOptions)

   // transporter.sendMail(mailOptions, function (err, response){
      // if (err)console.log(err)
   //})

}
