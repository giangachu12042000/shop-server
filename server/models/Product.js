
const mongoose = require('mongoose');
const { model } = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name:{type:String, require:true},
    price:{type:Number},
    quantity:{type:Number},
    des:{type:String},
    backgorund:{},
    image:[String],
    cate_id:{type:Schema.Types.ObjectId, ref:"categories"}
})
module.exports = mongoose.model('products',ProductSchema);