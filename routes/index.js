var express = require('express');
var router = express.Router();
var monk = require('monk');

var db = monk('localhost:27017/clgnews');
var trainings=db.get('trainings');
var trainers=db.get('trainers');
var circular=db.get('circular');
var notice=db.get('notice');
router.get('/user', function(req, res) { 
	 
	     
		 res.render('admin');
 });
router.get('/', function(req, res) { 
		trainings.find({},{}, function(e, docs){    
            console.log(docs);
		 res.render('index', {   
               
			     'trainings': docs  

		   });  
	 }); 
             
 
 });
router.post('/trainings_venue', function(req, res) {
    console.log(req.body.sno);
    var id = req.body.sno;
    trainings.find({"_id":id}, function(err,docs){
        console.log(docs);
      res.send(docs);
    });

});
router.post('/trainer', function(req, res) {
    console.log(req.body.sno);
    var trainerid = req.body.sno;
    trainers.find({"trainerid":trainerid}, function(err,docs){
        console.log(docs);
      res.send(docs);
    });
});


module.exports = router;
