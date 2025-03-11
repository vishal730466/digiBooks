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

const books_model= new mongoose.Schema({
    book_name:String,
    Total_pages:String
})

export const book_Schema = mongoose.models.Books_name || mongoose.model("Books_name",books_model)
export const mySchema= mongoose.models.pages || mongoose.model("pages",mymodel)

export const user_schema= mongoose.models.Users || mongoose.model("Users",user_model)