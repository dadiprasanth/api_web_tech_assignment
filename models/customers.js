const mongoose=require("mongoose")
const schema=mongoose.Schema
const Blogpost=new schema({
        customer_id:{type:String},
         customer_name:{type:String},
         email:{type:String},
         balance:{type:Number}
})
const customers=mongoose.model("customers",Blogpost)
module.exports=customers