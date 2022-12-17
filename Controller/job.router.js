const express = require('express')
const Job = require('../Models/Job.model')
const jobRouter = express.Router()
jobRouter.post("/", async (req, res) => {
    try {
        const newJob = await Job.create(req.body)
        return res.status(200).send({ message: 'Data added successfully', data: newJob })
    } catch (e) {
        return res.status(500).send("Internal server error")
    }
})

jobRouter.get("/", async (req, res) => {
    const { sort, search, filter } = req.query
    try {
        let newJob
        if (sort == "asc") {
            newJob = await Job.find().sort({ 'createdAt': 1 })
        } else if (sort == "desc") {
            newJob = await Job.find().sort({ 'createdAt': -1 })
        } else if (filter) {
            newJob = await Job.find({ role: filter })
        } else {
            newJob = await Job.find()
        }
        return res.status(200).send({ message: "Product get successfully", data: newJob })

    } catch (e) {
        return res.status(500).send("Internal server error")
    }
})


module.exports = jobRouter