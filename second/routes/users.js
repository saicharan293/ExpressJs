var express = require('express');
var router = express.Router();
const mongoose=require("mongoose")
const pls=require('passport-local-mongoose')


/* GET users listing. */
// router.post('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

mongoose.connect("mongodb://127.0.0.1:27017/againpractice")

const userSchema= mongoose.Schema({
  username:String,
  password:String,
  secret:String
})

userSchema.plugin(pls);

module.exports = mongoose.model("user",userSchema);
