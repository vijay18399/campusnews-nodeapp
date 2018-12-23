var express = require('express');
var router = express.Router();
var monk = require('monk');

var db = monk('localhost:27017/clgnews');
var trainings=db.get('trainings');
var workshops=db.get('workshops');
var seminars=db.get('seminars');
var eventgallery=db.get('eventgallery');
var placedcandidates=db.get('placedcandidates');
var cdrive=db.get('cdrive');
var result=db.get('exam');
var schedule=db.get('exam');
var techs=db.get('articles');
var articles=db.get('articles');
var trainers=db.get('trainers');
var events=db.get('events');
var faculty=db.get('notice');
var students=db.get('notice');
var holidays=db.get('notice');
var competitions=db.get('notice');


var circular=db.get('circular');
router.get('/user', function(req, res) { 
	 
	     
		 res.render('admin');
 });
router.get('/adminpanel', function(req, res) { 
     
         
         res.render('adminpanel');
 });

router.get('/', function(req, res) { 
		trainings.find({}, function(e, trainings){ 
           articles.find({"type": false}, function(e, articles){ 
               
             techs.find({"type": true}, function(e, techs){  
                  console.log(techs);
           cdrive.find({}, function(e, cdrive){
            circular.find({}, function(e, circulars){
                result.find({"type": "schedule"}, function(e, schedules){
                     console.log(schedules);
                schedule.find({"type": "results"}, function(e, results){
                    console.log(results);
           seminars.find({}, function(e, seminars){
                students.find({"type": "Mr"}, function(e, students){
                  events.find({}, function(e, events){
                  faculty.find({"type": "Honorable"}, function(e, faculty){
                    holidays.find({"type": "Dr"}, function(e, holidays){
                      competitions.find({"type": "Rev"}, function(e, competitions){
       res.render('index', {   

                 'articles': articles, 
            'seminars':seminars,
            'trainings': trainings,
            'cdrives':cdrive,
            'circulars':circulars,
             'scs ':schedules,
            'rss ':results,
                  'events':events,
             'techs':techs,
             'students':students,
             'faculty':faculty,
             'holidays':holidays,
             'competitions':competitions

           }); 


        }); }); }); }); }); }); }); }); }); }); }); });
 });  });
           
 

router.post('/trainings_venue', function(req, res) {
    console.log(req.body.sno);
    var id = req.body.sno;
    trainings.find({"_id":id}, function(err,docs){
        console.log(docs);
      res.send(docs);
    });

});

router.post('/seminar_venue', function(req, res) {
    console.log(req.body.sno);
    var id = req.body.sno;
    seminars.find({"_id":id}, function(err,docs){
        console.log(docs);
      res.send(docs);
    });

});
router.post('/get_articles', function(req, res) {
    console.log(req.body.sno);
    var id = req.body.sno;
    articles.find({"_id":id}, function(err,docs){
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
