const mongoose = require("mongoose")


const Todo = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
        maxlength:50,
    }
},{
    timestamps:true
})
module.exports = mongoose.model("Todo", Todo);
