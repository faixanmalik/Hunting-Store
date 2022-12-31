const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    firstName:{type: String, required: true},
    lastName:{type: String, required: true},
    email:{type: String, required: true},
    country:{type: String, required: true},
    products:[{ type: Object, required:true,}],
    streetAddress: {type: String, required: true},
    city: {type: String, required: true},
    state: {type: String, required: true},
    zip: {type: Number, required: true},
  },{timestamps:true});

mongoose.models={}
export default mongoose.model("Order", OrderSchema);