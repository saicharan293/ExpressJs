const mongoose=require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/practiceDB")

const userschema= mongoose.Schema({
  username: String,
  password: String,
  age: Number,
})

module.exports=mongoose.model("user",userschema)
