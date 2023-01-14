import User from '../../models/User'
import connectDb from '../../middleware/mongoose'
import CryptoJS from 'crypto-js';
// Jwt token
var jwt = require('jsonwebtoken');


const handler = async (req,res)=>{

    if (req.method == 'POST'){
        
        // let token = req.body.token;
        console.log(req.body)

        await User.findOneAndUpdate({email: dbuser.email}, {password: CryptoJS.AES.encrypt(req.body.npassword, process.env.CRYPTOJS_SECRET).toString()} )

        // if( decryptedPassword == req.body.cpassword ){

        //     res.status(200).json({ success: true , message: "New Password Set!" })
        // }
        // else{
        //     res.status(400).json({ success: false , message: "Wrong Password!" })
        // }

    }
    else{
        res.status(400).json({ success: false , message: "Some error occured!" })
    }

  

}
export default connectDb(handler);