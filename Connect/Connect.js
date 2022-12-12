const mongoose = require("mongoose")
const connect = () => {
    return mongoose.connect("mongodb+srv://durgashankar_mock:mockbackend@cluster0.nhcyork.mongodb.net/mock")
}
module.exports = connect