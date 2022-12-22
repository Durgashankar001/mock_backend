const express = require('express');
const questionModel = require('../Models/random.model');

const wordRouter = express.Router()

wordRouter.get("/", async (req, res) => {
    const { category, limit, level } = req.query
    console.log(category,limit,level)
    try {
        const data = await questionModel.find({$and:[{"category":category},{difficulty:level}]}).limit(limit)
       const totalPages = data.length
        return res.status(200).send({message:"Data Get successfull",data:data,totalPages:totalPages})
    }
    catch {
        return res.status(200).send("Internal server Error")
    }
})

module.exports = wordRouter