const mongoose = require("mongoose")
const gameSchema = new mongoose.Schema({
    name:{type:String,required:true},
    level:{type:String,required:true},
    score:{type:Number,required:true}
},{ timestamps: true })
const gameModel = mongoose.model("game",gameSchema)

module.exports = gameModel