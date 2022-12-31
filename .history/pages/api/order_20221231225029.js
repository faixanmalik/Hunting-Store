import Order from '../../models/Order'
import connectDb from '../../middleware/mongoose'


const handler = async (req,res)=>{


    if (req.method == 'POST'){
        const {products, email, cardHolder, cardNumber,cardExpiry, cardCvc, streetAddress, state, zip} = req.body;
        let newOrder = new Order( {products, email, cardHolder, cardNumber,cardExpiry, cardCvc, streetAddress, state, zip} );
        await newOrder.save();
        res.status(200).json({ success: true, message: "New Order Added !"})
        }

    }


export default connectDb(handler);