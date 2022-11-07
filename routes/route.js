const express=require("express")
const route=express.Router()
const bodyparser=require("body-parser")
const orders=require("../models/orders")
const customers=require("../models/customers")
const products=require("../models/products")
module.exports=route
route.use(bodyparser.json())
route.get("/",async(req,res)=>{
    const orderdata=await orders.find()
    const customersdata=await customers.find()
    const productsdata=await products.find()
    res.render("form.ejs",{orderdata,customersdata,productsdata})
}) 
route.post("/placeorder",async(req,res)=>{
    const customersdata=await customers.findOne({email:req.body.email})
    const productsdata=await products.findOne({Product_id:req.body.Product_id})
    console.log(req.body)
    console.log(customersdata,productsdata)
    if(productsdata.Available_quantity>=req.body.quantity){
        const total=productsdata.Product_price
        const avl=customersdata.balance
        if(avl>=total){
            await products.updateOne({Product_id:req.body.Product_id},{Available_quantity:productsdata.Available_quantity-req.body.quantity})
            await customers.updateOne({email:req.body.email},{balance:avl-total})
            res.redirect("/")


        }

    }
    //console.log(req.body)
    //res.status(200).send(req.body)
})  
