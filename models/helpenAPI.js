// Load required packages
var mongoose = require('mongoose');
mongoose.connect('mongodb://helpen:helpen1990@ds039880.mongolab.com:39880/helpenapi');

var bodyParser = require('body-parser');


var userSchema = new mongoose.Schema({
  name: String
, email: String
, pendingTasks : [String]
, dateCreated : Date
});

var subjectSchema = new mongoose.Schema({
  name: String
, description: String
, instructor : String
, semester : String
});

var User = mongoose.model('User', userSchema);
var Subject = mongoose.model('Subject',subjectSchema);


exports.findAll = function(req, res) {
    res.send([{name:'wine1'}, {name:'wine2'}, {name:'wine3'}]);
};
 
exports.findById = function(req, res) {
    res.send({id:req.params.id, name: "The Name", description: "description"});
};


exports.getSubject = function(req,res){
  
  var jsonQuery=req.param('where');
  
  if(jsonQuery==null)
    Subject.find({}, function (err, doc){
    if (err) 
      res.status(404)        // HTTP status 404: NotFound
      .send('404 Not found Sadly By Steve "This is real 404 By the way. Check status code" '); 
    else
      res.send(doc);
    });  
  
  if(jsonQuery!=null)
    res.send({user:jsonQuery});
  
  

};



exports.getUser = function(req,res){
  
  var jsonQuery=req.param('where');
  
  if(jsonQuery==null)
    User.find({}, function (err, doc){
    if (err) 
      res.status(404)        // HTTP status 404: NotFound
      .send('404 Not found Sadly By Steve "This is real 404 By the way. Check status code" '); 
    else
      res.send(doc);
    });  
  
  if(jsonQuery!=null)
    res.send({user:jsonQuery});
  
  

};
 




exports.getUserById = function(req,res){
  
  var id = req.param('id');
  
    User.findOne({ _id: id}, function (err, doc){
      if (err) 
        res.status(404)        // HTTP status 404: NotFound
        .send('404 Not found Sadly By Steve "This is real 404 By the way. Check status code" '); 
      else
        res.send(doc);
    });
  
};


exports.putUserById = function(req,res){
  
  console.log(req.body); 
  res.send(req.body); 
  
  //var id = req.param('id');
  //User.findOne({ _id: id}, function (err, doc){
    //if (err) 
      //res.status(404)        // HTTP status 404: NotFound
      //.send('404 Not found Sadly By Steve "This is real 404 By the way. Check status code" '); 
    //else
      //res.send(doc);
  //});
  
};


exports.postUser = function(req,res){
  
  var user = new User({
    name: "Steve"
    ,email: "hyunmin90@gmail.com"
    ,pendingTasks : ["steve"]
    ,dateCreated : "12-20-2015"
  });
  
  user.save(function(err, user) {
    if (err) return console.error(err);
    else res.send({user:"createdUser"}); 
    console.dir(user);
  });
  

};