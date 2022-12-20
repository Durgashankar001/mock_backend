const express = require('express');
const gameModel = require('../Models/random.model');
const wordRouter = express.Router()
wordRouter.get("/", async (req, res) => {
    try {
        const all = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let ans = [];
        let x = Math.floor(Math.random() * (15 - 5)) + 5;
        for (let i = 0; i < x; i++) {
            let y = all.charAt(Math.floor(Math.random() * all.length));
            ans.push(y)
        }
        return res.status(200).send({ message: "Word generate successfully", data: ans })
    } catch (e) {
        return res.status(500).send("Internal server error")
    }
})





module.exports = wordRouter