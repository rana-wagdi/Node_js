var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', condition:true });
});
router.get('/person',(req,res,next)=>{
  res.render('person')
})
module.exports = router;
