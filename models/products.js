const mongoose=require("mongoose")
const schema=mongoose.Schema
const Blogpost=new schema({
    Product_id:{type:String},
    Product_type:{type:String},
     Product_name:{type:String},
      Product_price:{type:Number},
       Available_quantity:{type:Number},
})
const products=mongoose.model("products",Blogpost)
module.exports=products