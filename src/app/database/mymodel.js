const { default: mongoose } = require("mongoose");

const mymodel= new mongoose.Schema({
    name:String,
    password:String
})

export const mySchema= mongoose.models.CollectionOne || mongoose.model("CollectionOne",mymodel)