const { default: mongoose } = require("mongoose");

const mymodel= new mongoose.Schema({
    book_name:String,
    pageNo:String,
    book_data:String
})

export const mySchema= mongoose.models.collection1 || mongoose.model("collection1",mymodel)