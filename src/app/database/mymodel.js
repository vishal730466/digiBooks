const { default: mongoose } = require("mongoose");

const mymodel= new mongoose.Schema({
    book_name:String,
    pageNo:String,
    book_data:String
})

const user_model= new mongoose.Schema({
    name:String,
    password:String
   
})
export const mySchema= mongoose.models.collection1 || mongoose.model("collection1",mymodel)

export const user_schema= mongoose.models.Users || mongoose.model("Users",user_model)