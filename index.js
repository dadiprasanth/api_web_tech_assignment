const mongoose=require("mongoose")
const express=require("express")
const orders=require("./models/orders")
const customers=require("./models/customers")
const products=require("./models/products")
const sampledata=require("./data")
const route=require("./routes/route")
const ejs=require("ejs")
const app=express()
const bodyparser=require("body-parser")
app.use(bodyparser.urlencoded({ extended: false }))
app.use("/",route)
mongoose.connect("mongodb://localhost/api_web_tech_assignment")
const fun=async()=>{
     
    let x=await orders.find()
    //console.log(x)
    if(x.length==0){
        await orders.create(sampledata.orderTable)
        await customers.create(sampledata.customerTable)
        await products.create(sampledata.productTable)
        console.log("inside ")   
    }
}
fun()
app.set("views","./views")
app.set("view engine","ejs")
route.get("/",async(req,res)=>{
    const orderdata=await orders.find()
    const customersdata=await customers.find()
    const productsdata=await products.find()
    res.render("form.ejs",{orderdata,customersdata,productsdata})
}) 
route.post("/placeorder",async(req,res)=>{
    console.log(req.body)
    res.status(200).send("this is from place order")
})
const port=8081
app.listen(port,()=>console.log("app is listening"))
