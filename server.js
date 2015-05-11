// Get the packages we need
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var router = express.Router();
var userModel = require('./models/user');
var subjectModel = require('./models/subject');
var reviewModel = require('./models/review');

var User = mongoose.model('User');
var Subject = mongoose.model('Subject');
var Review = mongoose.model('Review');
var sockjs = require('sockjs');
var http = require('http');

var connections = [];
var connections1 = [];
var connections2 = [];
var connections3 = [];
var connections4 = [];
var connections5 = [];
var connections6 = [];
var connections7 = [];
var connections8 = [];
var connections9 = [];
var connections10 = [];
var connections11 = [];
var connections12 = [];
var connections13 = [];



var grainger = sockjs.createServer();
grainger.on('connection', function(conn) {
    connections1.push(conn);
    var number = connections1.length;
    conn.write("Welcome to Grainger, User " + number);
    conn.on('data', function(message) {
        for (var ii=0; ii < connections1.length; ii++) {
            connections1[ii].write("User " + number + " says: " + message);
        }
    });
    conn.on('close', function() {
        for (var ii=0; ii < connections1.length; ii++) {
            connections1[ii].write("User " + number + " has disconnected");
        }
    });
});


var ugl = sockjs.createServer();
ugl.on('connection', function(conn) {
    connections2.push(conn);
    var number = connections2.length;
    conn.write("Welcome to UGL, User " + number);
    conn.on('data', function(message) {
        for (var ii=0; ii < connections2.length; ii++) {
            connections2[ii].write("User " + number + " says: " + message);
        }
    });
    conn.on('close', function() {
        for (var ii=0; ii < connections2.length; ii++) {
            connections2[ii].write("User " + number + " has disconnected");
        }
    });
});


var siebel = sockjs.createServer();
siebel.on('connection', function(conn) {
    connections3.push(conn);
    var number = connections3.length;
    conn.write("Welcome to Siebel, User " + number);
    conn.on('data', function(message) {
        for (var ii=0; ii < connections3.length; ii++) {
            connections3[ii].write("User " + number + " says: " + message);
        }
    });
    conn.on('close', function() {
        for (var ii=0; ii < connections3.length; ii++) {
            connections3[ii].write("User " + number + " has disconnected");
        }
    });
});


var dcl = sockjs.createServer();
dcl.on('connection', function(conn) {
    connections4.push(conn);
    var number = connections4.length;
    conn.write("Welcome to DCL, User " + number);
    conn.on('data', function(message) {
        for (var ii=0; ii < connections4.length; ii++) {
            connections4[ii].write("User " + number + " says: " + message);
        }
    });
    conn.on('close', function() {
        for (var ii=0; ii < connections4.length; ii++) {
            connections4[ii].write("User " + number + " has disconnected");
        }
    });
});



var csl = sockjs.createServer();
csl.on('connection', function(conn) {
    connections5.push(conn);
    var number = connections5.length;
    conn.write("Welcome CSL, User " + number);
    conn.on('data', function(message) {
        for (var ii=0; ii < connections5.length; ii++) {
            connections5[ii].write("User " + number + " says: " + message);
        }
    });
    conn.on('close', function() {
        for (var ii=0; ii < connections5.length; ii++) {
            connections5[ii].write("User " + number + " has disconnected");
        }
    });
});



var beckman = sockjs.createServer();
beckman.on('connection', function(conn) {
    connections6.push(conn);
    var number = connections6.length;
    conn.write("Welcome to Beckman, User " + number);
    conn.on('data', function(message) {
        for (var ii=0; ii < connections6.length; ii++) {
            connections6[ii].write("User " + number + " says: " + message);
        }
    });
    conn.on('close', function() {
        for (var ii=0; ii < connections6.length; ii++) {
            connections6[ii].write("User " + number + " has disconnected");
        }
    });
});



var ncsa = sockjs.createServer();
ncsa.on('connection', function(conn) {
    connections7.push(conn);
    var number = connections7.length;
    conn.write("Welcome to NCSA, User " + number);
    conn.on('data', function(message) {
        for (var ii=0; ii < connections7.length; ii++) {
            connections7[ii].write("User " + number + " says: " + message);
        }
    });
    conn.on('close', function() {
        for (var ii=0; ii < connections7.length; ii++) {
            connections7[ii].write("User " + number + " has disconnected");
        }
    });
});



var everitt = sockjs.createServer();
everitt.on('connection', function(conn) {
    connections8.push(conn);
    var number = connections8.length;
    conn.write("Welcome to EVERITT, User " + number);
    conn.on('data', function(message) {
        for (var ii=0; ii < connections8.length; ii++) {
            connections8[ii].write("User " + number + " says: " + message);
        }
    });
    conn.on('close', function() {
        for (var ii=0; ii < connections8.length; ii++) {
            connections8[ii].write("User " + number + " has disconnected");
        }
    });
});


var mechanical = sockjs.createServer();
mechanical.on('connection', function(conn) {
    connections9.push(conn);
    var number = connections9.length;
    conn.write("Welcome to Mechanical, User " + number);
    conn.on('data', function(message) {
        for (var ii=0; ii < connections9.length; ii++) {
            connections9[ii].write("User " + number + " says: " + message);
        }
    });
    conn.on('close', function() {
        for (var ii=0; ii < connections9.length; ii++) {
            connections9[ii].write("User " + number + " has disconnected");
        }
    });
});


var talbot = sockjs.createServer();
talbot.on('connection', function(conn) {
    connections10.push(conn);
    var number = connections10.length;
    conn.write("Welcome to Talbot, User " + number);
    conn.on('data', function(message) {
        for (var ii=0; ii < connections10.length; ii++) {
            connections10[ii].write("User " + number + " says: " + message);
        }
    });
    conn.on('close', function() {
        for (var ii=0; ii < connections10.length; ii++) {
            connections10[ii].write("User " + number + " has disconnected");
        }
    });
});


var engineering = sockjs.createServer();
engineering.on('connection', function(conn) {
    connections11.push(conn);
    var number = connections11.length;
    conn.write("Welcome to Engineering Hall, User " + number);
    conn.on('data', function(message) {
        for (var ii=0; ii < connections11.length; ii++) {
            connections11[ii].write("User " + number + " says: " + message);
        }
    });
    conn.on('close', function() {
        for (var ii=0; ii < connections11.length; ii++) {
            connections11[ii].write("User " + number + " has disconnected");
        }
    });
});

var micro = sockjs.createServer();
micro.on('connection', function(conn) {
    connections12.push(conn);
    var number = connections12.length;
    conn.write("Welcome to Micro Nano Lab, User " + number);
    conn.on('data', function(message) {
        for (var ii=0; ii < connections12.length; ii++) {
            connections12[ii].write("User " + number + " says: " + message);
        }
    });
    conn.on('close', function() {
        for (var ii=0; ii < connections12.length; ii++) {
            connections12[ii].write("User " + number + " has disconnected");
        }
    });
});



//replace this with your Mongolab URL
mongoose.connect('mongodb://admin:admin@ds031952.mongolab.com:31952/helpen');

// Create our Express application
var app = express();

var server = require('http').createServer(app); 


grainger.installHandlers(server, {prefix:'/chat/grainger'});
siebel.installHandlers(server, {prefix:'/chat/siebel'});
ugl.installHandlers(server, {prefix:'/chat/ugl'});
dcl.installHandlers(server, {prefix:'/chat/dcl'});
csl.installHandlers(server, {prefix:'/chat/csl'});
beckman.installHandlers(server, {prefix:'/chat/beckman'});
ncsa.installHandlers(server, {prefix:'/chat/ncsa'});
everitt.installHandlers(server, {prefix:'/chat/everitt'});
mechanical.installHandlers(server, {prefix:'/chat/mechanical'});
talbot.installHandlers(server, {prefix:'/chat/talbot'});
engineering.installHandlers(server, {prefix:'/chat/engineering'});
micro.installHandlers(server, {prefix:'/chat/micro'});
  









// Use environment defined port or 4000
var port = process.env.PORT || 4000;

//Allow CORS so that backend and frontend could pe put on different servers
var allowCrossDomain = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
  next();
};

app.use(allowCrossDomain);

// Use the body-parser package in our application
app.use(bodyParser.urlencoded({
  extended: true
}));


app.use('/api', router);
var homeRoute = router.route('/');
var userRoute = router.route('/user');
var adduserRoute = router.route('/user/adduser');
var addusersubjectRoute = router.route('/user/addsubject');
var loginRoute = router.route('/login');

var reviewRoute = router.route('/review');
var addreviewRoute = router.route('/review/addreview');
var updatereviewRoute = router.route('/review/updatereview');
var findreviewRoute = router.route('/review/findreview');

var subjectRoute = router.route('/subject');
var addsubjectRoute = router.route('/subject/addsubject');

homeRoute.get(function (req, res) {
  res.status(200)
  res.json({ message: 'RESTFUL API' });
});

userRoute.options(function (req, res) {
    res.writeHead(200);
    res.end();
});

userRoute.get(function (req, res) {
	var userQuery = req.query;
	var query = User.find();

	query.exec(function(err, users) {
		if (err) {
			res.status(500);
			res.send({ message: "GET USER FAILED", data: err });
		}
		res.status(200);
		res.json({ message: "GET USER SUCCESS", data: users });
	});
});

userRoute.post(function (req, res){
  User.findOne({username: req.body.username}, function(err, user){
      if(err || user == null){
          return res.status(404).json({message: "POST USER - Cannot find User", data: err});
      } else if(user.password != req.body.password){
          return res.status(500).json({message: "POST USER - Password is incorrect", data: err});
      } else {
          res.status(200).json({message: "POST USER SUCCESS", data: user});
      }
  });
});

adduserRoute.options(function (req, res) {
    res.writeHead(200);
    res.end();
});

adduserRoute.post(function (req, res) {
  if(!req.body.name || !req.body.username || !req.body.password || !req.body.email){
      res.status(500).json({message: "POST ADDUSER - All fields must be filled out", data: []});
  } else {
    var user = new User();
    user.name = req.body.name;
    user.username = req.body.username;
    user.password = req.body.password;
    user.email = req.body.email;
    user.save(function (err){
      if(err){
          if(err.code == 11000){
              res.status(500).json({message: "POST ADDUSER FAILED - Username is not unique"});
          } else {
              res.status(500).json({message: "POST ADDUSER FAILED", data: err});

          }
      } else{
          res.status(201).json({message: "ADDUSER SUCCESS", data:user});
      }
    });
  }
});


addusersubjectRoute.post(function (req, res) {
  if(!req.body.username || !req.body.subject){
    res.status(500).json({message: "POST ADDSUBJECT - Subject name and Username is required"});
  } else {
    User.findOne({username: req.body.username}, function (err, user){
      if(err || user == null){
        return res.status(404).json({message: "POST USER/ADDSUBJECT FAILED - User cannot be found from User Schema", data: []});
      } else {
        user.subject = req.body.subject;
        user.save(function (err){
          if(err){
            res.status(500).json({message: "POST USER/ADDSUBJECT FAILED - Error occurred while updating subject"});
          } else{
            res.status(201).json({message: "POST USER/ADDSUBJECT SUCCESS", data: user});
          }
        });
      }
    });

    Subject.findOne({subjectId: req.body.subject}, function (err, subject) {
      if(err || subject == null){
        return res.status(404).json({message: "POST USER/ADDSUBJECT FAILED - Subject cannot be found from Subject Schema", data: []});
      } else {
        subject.users.push({
          username: req.body.username
        });
        subject.save(function (err) {
          if(err){
            res.status(500).json({message: "POST USER/ADDSUBJECT FAILED - Username cannt be added to Subject Schema"});
          } else {
            res.status(201).json({message: "POST USER/ADDSUBJECT SUCCESS - Username successfully added to Subject Schema", data: subject.users});
          }

        });
      }
    });
  }
});
  



loginRoute.post(function (req, res) {
  User.findOne({username: req.body.username}, function (err, user){
    if(err || user == null){
      return res.status(404).json({message: "POST LOGIN - Cannot find User", data: err});
    } else if(user.password != req.body.password){
      return res.status(500).json({message: "POST LOGIN - Password is incorrect", data: err});
    } else {
      res.status(200).json({message: "POST LOGIN SUCCESS", data: user});
    }
  });
});


reviewRoute.get(function (req, res) {
  var reviewQuery = req.query;
  var query = Review.find();

  query.exec(function(err, reviews) {
    if (err) {
      res.status(500);
      res.send({ message: "GET REVIEW FAILED", data: err });
    }
    res.status(200);
    res.json({ message: "GET REVIEW SUCCESS", data: reviews });
  });
});


addreviewRoute.post(function (req, res) {
  if(!req.body.buildingId || !req.body.rating || !req.body.numberOfParticipant){
      res.status(500).json({message: "POST ADDREVIEW - Please provide building name and its rating", data: []});
  } else {
    var review = new Review();
    review.buildingId = req.body.buildingId;
    review.rating = req.body.rating;
    review.numberOfParticipant = req.body.numberOfParticipant;
    console.log(review);
    review.save(function (err){
      if(err){
          if(err.code == 11000){    
              console.log(err);
              res.status(500).json({message: "POST ADDREVIEW FAILED - Building name already exists", data: err});
          } else {
              res.status(500).json({message: "POST ADDREVIEW FAILED", data: err});
          }
      } else {
          res.status(201).json({message: "POST ADDREVIEW SUCCESS", data:review});
      }
    });
  }
});

updateReivew.post(function (req, res) {
  if(!req.body.buildingId || !req.body.rating || ! req.body.numberOfParticipant){
    res.status(500).json({message: "POST UPDATEREVIEW FAILED - All fields are required", data:[]});
  } else {
    Review.findOne({buildingId: req.body.buildingId}, function (err, review){
      if(err || review == null){
        return res.status(404).json({message: "POST UPDATEREVIEW FAILED - Building cannot be found", data: []});
      } else {
        review.rating = req.body.rating;
        review.numberOfParticipant = req.body.numberOfParticipant;
        review.save(function (err) {
          if (err){
            res.status(500).json({message: "POST UPDATEREVIEW FAILED - Error occurred while updating rating or numberOfParticipant"});
          } else{
            res.status(201).json({message: "POST UPDATEREVIEW SUCCESS", data: review})
          }
        });
      }
    });
  }
});

findreviewRoute.post(function (req, res) { 
  Review.findOne({buildingId: req.body.buildingId}, function (err, review){ 
    if(err || review == null){
      return res.status(404).json({message: "POST FINDREVIEW - Cannot find Review", data: err});
    } else {
      res.status(200).json({message: "POST FINDREVIEW SUCCESS", data: review});
    }
  });
});

subjectRoute.get(function (req, res) {
  var subjectQuery = req.query;
  var query = Subject.find();

  query.exec(function (err, subjects) {
    if (err) {
      res.status(500);
      res.send({ message: "GET SUBJECT FAILED", data: err });
    }
    res.status(200);
    res.json({ message: "GET SUBJECT SUCCESS", data: subjects });
  });
});

addsubjectRoute.post(function (req, res) {
  if(!req.body.subjectId){
      res.status(500).json({message: "POST SUBJECT/ADDSUBJECT - All fields must be filled out", data: []});
  } else {
    var subject = new Subject();
    subject.subjectId = req.body.subjectId;

    subject.save(function (err){
      if(err){
          if(err.code == 11000){
              console.log(err);
              res.status(500).json({message: "POST SUBJECT/ADDUSER FAILED - Subject already exists"});
          } else {
              res.status(500).json({message: "POST SUBJECT/ADDUSER FAILED", data: err});

          }
      } else{
          res.status(201).json({message: "SUBJECT/ADDUSER SUCCESS", data:subject});
      }
    });
  }
});



// Start the server
server.listen(port);
console.log('Server running on port ' + port); 

