const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.user
  })
);
// router.get('/rbook',(req,res,next) => ){
//var resultArray = [];
//   mongo.connect(url,(err,db) => {
//     assert.equal(null,err);
//     var cursor = db.collection('rbook').find()
//cursor.forEach((doc,err) =>{
//assert.equal(null,err);
//resultArray.push(doc);
//},function(){
//debugger.close();
//res.render('index',{items: resultArray});
//});
//});
//   });




module.exports = router;
