import Order from '../../models/Order'
import connectDb from '../../middleware/mongoose'


const handler = async (req,res)=>{


    if (req.method == 'POST'){
        const {firstName, lastName, email, country, products , streetAddress, city, state, zip} = req.body;
        let newOrder = new Order( {firstName, lastName, email, products , country ,streetAddress, city, state, zip} );
        await newOrder.save();
        res.status(200).json({ success: true, message: "New Order Added !"})
        }

    }


export default connectDb(handler);