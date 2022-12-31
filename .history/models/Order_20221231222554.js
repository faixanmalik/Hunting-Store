const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    email:{type: String, required: true},
    cardHolder:{type: String, required: true},
    cardNumber:{type: Number, required: true},
    cardExpiry:{type: String, required: true},
    cardCvc:{type: Number, required: true},
    products:[{ type: Object, required:true,}],
    streetAddress: {type: String, required: true},
    state: {type: String, required: true},
    zip: {type: Number, required: true},
  },{timestamps:true});

mongoose.models={}
export default mongoose.model("Order", OrderSchema);