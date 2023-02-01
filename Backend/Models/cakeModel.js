const mongoose = require("mongoose")
const cakeSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
    },

    description:{
        type: String,
        required: true,
    },

    amount:{
        type: Number,
        required: true,
    },

    category:{
        type: String,
        required: true,
    },

    quantity:{
        type: Number,
        required: true,
    },

    image:{
        type: String,
        required: true,
    },

    slider1:{
        type: String,
        required: true,
    },

    slider2:{
        type: String,
        required: true,
    },

    slider3:{
        type: String,
        required: true,
    },

    phone:{
        type: String,
        required: true,
    }
})


const Cake = mongoose.model("Cake", cakeSchema)
module.exports = Cake
