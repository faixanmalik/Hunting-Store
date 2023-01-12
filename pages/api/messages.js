const nodemailer = require('nodemailer')


export default async function handler(req, res) {

    if (req.method == 'POST'){
        const user = req.body;
        
        const transporter = nodemailer.createTransport({
            host:'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
              user: process.env.EMAIL,
              pass: process.env.PASSWORD,
            },
          });

          const mailData = {
            from: user.email,
            to: process.env.EMAIL,
            subject: `Message From ${user.name}`,
            text: user.message,
           }

           
           transporter.sendMail(mailData, (error, info) => {
            if (error) {
                return res.status(400).json({ success: false, message: "Some Error Occured!"})
            }
            res.status(200).json({ success: true, message: "Message Sent!"})
        });




        
    }
  }