const mongoose=require("mongoose")
const schema=mongoose.Schema
const Blogpost=new schema({
  
       customer_id:{type:String},
        inventory_id:{type:String},
        item_name:{type:String},
        quantity:{type:Number}
})
const orders=mongoose.model("orders",Blogpost)
module.exports=orders