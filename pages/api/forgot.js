// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Forgot from "../../models/Forgot"
import User from "../../models/User"


export default async function handler(req, res) {
    let company = 'Hunting_Store'
    let token = `qwertyuio3456789dfg67yuh78yujh98iok`;

    let forgot= new Forgot({
      email: req.body.email,
      token: token
    })

    // let email = `Hello ${req.body.email},

    // Somebody requested a new password for the ${company} account associated with [email].
    
    // No changes have been made to your account yet.
    
    // You can reset your password by clicking the link below:
    // <a href="https://${company}/forgot?token=${token}" target="_blank">Click here to reset your password</a>


    // If you did not request a new password, please let us know immediately by replying to this email.
    
    // Yours,
    // The ${company} team`



    




    res.status(200).json({ success: true, message: `details has been sent to ${req.body.email}`})
  }
   