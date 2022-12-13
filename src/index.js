const express = require("express")
const mongoose = require("mongoose")
const User = require("../Models/user.model")
const cors = require("cors")
const connect = require("../Connect/Connect")
const req = require("express/lib/request")
const userRouter = require("../Controller/user.router")
const EmiRouter = require("../Controller/Emi.router")
const PORT = process.env.PORT || 8000
mongoose.set('strictQuery', true)
const server = express()
server.use(express.json())
server.use(cors())

server.get("/",async(req,res)=>{
    res.status(200).send("Hello Welcome to my server")
})
server.use("/user",userRouter)
server.use("/emi",EmiRouter)
server.post("/",async(req,res)=>{
    const user = req.body
    console.log(user)
    const data = await User.create(user)
    res.status(200).send({message:"data added successfully",data:data})
})
server.listen(PORT, async () => {
    await connect()
    console.log(`Database Connected and server listening on port ${PORT}`)
})