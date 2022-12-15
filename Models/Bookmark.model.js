const mongoose = require("mongoose")
const bookMarkSchema = new mongoose.Schema({
    title:{type:String,required:true},
    quantity:{type:Number,required:true},
    priority:{type:String,required:true},
    description:{type:String,required:true}
},{ timestamps: true })
const bookMarkModel = mongoose.model("bookmark",bookMarkSchema)
module.exports = bookMarkModel