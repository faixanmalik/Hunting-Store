const nodemailer = require('nodemailer')


export default async function handler(req, res) {

    if (req.method == 'POST'){
        const user = req.body;
        console.log(user)
        
        const transporter = nodemailer.createTransport({
            host:'smtp.gmail.com',
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
              user: 'faixan.malik554@gmail.com',
              pass: process.env.PASSWORD,
            },
          });

          const mailData = {
            from: 'demo@gmail.com',
            to: 'faixan.malik554@gmail.com',
            subject: `Message From ${user.name}`,
            text: user.message,
            html: `<div key=${user.name} ref=${user.name}>${user.message}</div>`
           }
           console.log(mailData)


           transporter.sendMail(mailData, (error, info) => {
            if (error) {
                return console.log(error.message);
            }
            console.log('success');
        });




        res.status(200).json({ success: true, message: "Message Sent!"})
    }
  }