const express = require("express")
const Bookmark = require("../Models/Bookmark.model")

const bookMarkRouter = express.Router()

bookMarkRouter.post("/",async(req,res)=>{
    try{
        const newProduct = await Bookmark.create(req.body)
        return res.status(200).send({message:"Product added successfully",data:newProduct})

    }catch(e){
        return res.status(500).send("Internal server error")
    }
})


bookMarkRouter.get("/",async(req,res)=>{
    try{
        const newProduct = await Bookmark.find()
        return res.status(200).send({message:"Product get successfully",data:newProduct})

    }catch(e){
        return res.status(500).send("Internal server error")
    }
})

module.exports=bookMarkRouter