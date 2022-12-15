const express = require("express")
const Product = require("../Models/product.model")

const productRouter = express.Router()

productRouter.post("/",async(req,res)=>{
    try{
        const newProduct = await Product.create(req.body)
        return res.status(200).send({message:"Product added successfully",data:newProduct})

    }catch(e){
        return res.status(500).send("Internal server error")
    }
})


productRouter.get("/",async(req,res)=>{
    const {sort,search,filter} = req.query
    try{
        let newProduct
        if(sort=="asc"){
            console.log("asc")
            newProduct = await Product.find().sort({'createdAt':1})  
        }else if(sort=="desc"){
            console.log("desc")
            newProduct = await Product.find().sort({'createdAt':-1})  
        }else if(filter){
            newProduct = await Product.find({priority:filter})
        }else{
            newProduct = await Product.find()
        }
        return res.status(200).send({message:"Product get successfully",data:newProduct})

    }catch(e){
        return res.status(500).send("Internal server error")
    }
})


productRouter.delete("/:id",async(req,res)=>{
    const {id}=req.params
    try{
        const newProduct = await Product.deleteOne({_id:id})
        return res.status(200).send({message:"Product deleted successfully",data:newProduct})

    }catch(e){
        return res.status(500).send("Internal server error")
    }
})



module.exports = productRouter