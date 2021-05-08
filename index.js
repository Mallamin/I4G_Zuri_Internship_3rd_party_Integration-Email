const bodyParser = require('body-parser')
const express = require('express')
const dotenv = require('dotenv')
const {sendMail} = require('./emailSender');
const{eMessage}= require('./emailTemplate')
dotenv.config()


const app = express ()
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use('/', express.static(__dirname+"/Views"))
const PORT = process.env.PORT||4000

app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`)
})

app.post("/", async(req, res)=>{
    const {name, email, subject, message}=req.body
    try{
         if(!name && !email && !subject && !message)
        return res.json ("Data incomplet")

        await sendMail({
            name,
            email,
            subject,
            message: await eMessage(name,email,subject,message)
            
        })
         res.status(201).json({message:'Email sent'})
    } catch(err){
        console.log(err)
        res.status(500).json({message:'Email not sent'})
    }
    

})