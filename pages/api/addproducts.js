import Product from '../../models/Product'
import connectDb from '../../middleware/mongoose'

const handler = async (req,res)=>{
    if (req.method == 'POST'){
        for (let i = 0; i < req.body.length; i++) {
        let addProduct = new Product({
            title: req.body[i].title,
            desc: req.body[i].desc,
            slug: req.body[i].slug ,
            img: req.body[i].img,
            category: req.body[i].category,
            size: req.body[i].size ,
            color: req.body[i].color ,
            price: req.body[i].price,
            avilableQty: req.body[i].avilableQty,
            file: req.body[i].file,
            })
        await addProduct.save();
        }
        res.status(200).json({ success: "Item added Succesfully!" })
    }
    else{
        res.status(400).json({ error: "This method is not allowed!" })
    }

}
export default connectDb(handler);