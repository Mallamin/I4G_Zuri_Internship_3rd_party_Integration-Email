exports.eMessage=async(name,email,subject, message)=>{
    const html=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Contact Us Response</title>
</head>
<body>
    <h2>Somebody wants to get in touch with you</h2>
    <div>Name:${name}
         Email:${email}
         Subject:${subject}
         Message:${mssage}
    </div>
</body>
</html>`
return html

}