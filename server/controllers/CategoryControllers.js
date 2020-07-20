const CategoryModel = require('../models/Category'); 
module.exports.create = async (req, res)=>{ 
    try{
        const data = req.body; 
        let newCategory = new CategoryModel({...data});
        let category = await newCategory.save();
        console.log(category,'===================>?save')
        return res.send(category).status(200)
    }catch(e){
        console.log(e,'===================>?err')
        res.boom.badData(e)
    }
}
module.exports.fetchCategories = async(req,res)=>{
    try{
        const result = await CategoryModel.find();
        console.log(result,'====>?')
        return res.send(result).status(200)
    }catch(e){
        console.log(e,'===================>?err')
        res.boom.badData(e)
    }
}