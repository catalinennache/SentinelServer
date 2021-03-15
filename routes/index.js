var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  /*
   
  */
  res.render('index', { title: 'Express' });
});

router.get('/stream',function(req,res,next){
  res.set('Content-Type', 'video/webm'); // TODO: Might want to set your codecs here also
  console.log(global.connectionManager.getConnection(req.query["id"])!= undefined)
  global.connectionManager.getConnection(req.query["id"]).stream.pipe(res);
})
router.get('/resetStream',function(req,res,next){
  res.set('Content-Type', 'video/webm'); 
  res.end()
});

module.exports = router;
