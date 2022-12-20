const express = require('express');
const gameModel = require('../Models/random.model');
const userRouter = express.Router()

userRouter.post("/", async (req, res) => {
    try {

        let newEntry = gameModel.create(req.body)
        return res.status(200).send({ message: "data added successfully", data: newEntry })
    } catch (e) {
        return res.status(500).send("Internal server error")
    }
})



userRouter.get("/", async (req, res) => {
    try {
        let data = await gameModel.find()
        return res.status(200).send({ message: "data added successfully", data: data })
    } catch (e) {
        return res.status(500).send("Internal server error")
    }
})
module.exports = userRouter