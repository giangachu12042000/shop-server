const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    name:{type:String}
})

module.exports = mongoose.model('categories',articleSchema)