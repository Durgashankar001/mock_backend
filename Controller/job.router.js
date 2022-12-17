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
    const { sort, search, filter, page = 1, limit = 10 } = req.query
    try {
        let x
        let newJob
        if (sort == "asc") {
            x = await Job.find().sort({ 'createdAt': 1 })
            newJob = await Job.find().sort({ 'createdAt': 1 }).skip(10 * (page - 1)).limit(limit)
        } else if (sort == "desc") {
            x = await Job.find().sort({ 'createdAt': -1 })
            newJob = await Job.find().sort({ 'createdAt': -1 }).skip(10 * (page - 1)).limit(limit)
        } else if (filter) {
            x = await Job.find({ role: filter })
            newJob = await Job.find({ role: filter }).skip(10 * (page - 1)).limit(limit)
        } else {
            x = await Job.find()
            newJob = await Job.find().skip(10 * (page - 1)).limit(limit)
        }
        return res.status(200).send({ message: "Product get successfully", data: newJob, totalPages: Math.ceil(x.length / limit) })

    } catch (e) {
        return res.status(500).send("Internal server error")
    }
})


module.exports = jobRouter