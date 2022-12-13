const express = require("express")
const EmiRouter = express.Router()
EmiRouter.post("/",async(req,res)=>{
   const {loan,anualInterest,totlamonth} = req.body
   let x = Number(anualInterest)/12/100
   let emi = (Number(loan)*x*((1+x)/Number(totlamonth)))/(((1+x)/Number(totlamonth)-1))
   res.status(200).send(emi.toString())
})
module.exports =EmiRouter

// EMI:E = P x r x ( 1 + r )n / ( ( 1 + r )n - 1 ) 