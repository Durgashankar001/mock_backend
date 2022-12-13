const express = require("express")
const EmiRouter = express.Router()
EmiRouter.post("/", async (req, res) => {
    const { loan, anualInterest, totlamonth } = req.body
    if (anualInterest == Number(anualInterest)) {
        let r = anualInterest / 12 / 100;
        let emi = Number((loan * r * ((1 + r) ** totlamonth) / ((1 + r) ** totlamonth - 1)).toFixed(2));
        let payableInterest = Number(((emi * totlamonth) - loan).toFixed());
        let total = Number((emi * totlamonth).toFixed(2));
        return res.status(200).send({ emi: emi, interest: payableInterest, total: total });
    }
    return res.status(401).send("Please provide valid Input")
})
module.exports = EmiRouter

// EMI:E = P x r x ( 1 + r )n / ( ( 1 + r )n - 1 ) 