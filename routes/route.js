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
    console.log(req.body,"jkncjkxznjcn")
    res.status(200).send("data from post")
})  
