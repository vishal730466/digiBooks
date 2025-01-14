const { default: mongoose } = require("mongoose");

const mymodel= new mongoose.Schema({
    name:String
})

export const mySchema= mongoose.models.CollectionOne || mongoose.model("CollectionOne",mymodel)