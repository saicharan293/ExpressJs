var express = require('express');
var router = express.Router();
// const userModel=require('./users')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.cookie("age",25)
  res.render('index');
});
router.get('/read', function(req, res, next) {
  console.log(req.cookies.age)
  res.send('check');
});

router.get('/delete',function(req,res){
  res.clearCookie("age");
  res.send("clear the cookie session")
})


module.exports = router;
