import Order from '../../models/Order'
import connectDb from '../../middleware/mongoose'


const handler = async (req,res)=>{


    if (req.method == 'POST'){
        const {products, email, cardHolder, cardNumber,cardExpiry, cardCvc, streetAddress, state, zip} = req.body;
        let newOrder = new Order( {products, email, cardHolder, cardNumber,cardExpiry, cardCvc, streetAddress, state, zip} );
        let orderid = await newOrder.save();
        res.status(200).json({ success: true, message: "New Order Added !"}) 

        // this is the id in string format convert it into a number to redirect the same page
        // console.log(orderid._id)
        // res.redirect(`/order?id=`+ orderid._id ,200)
        
        }

    }


export default connectDb(handler);