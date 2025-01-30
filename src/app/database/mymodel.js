const { default: mongoose } = require("mongoose");

const mymodel= new mongoose.Schema({
    name:String,
    password:String
})

export const mySchema= mongoose.models.collection1 || mongoose.model("collection1",mymodel)