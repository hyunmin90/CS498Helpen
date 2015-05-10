
// Get the packages we need
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var router = express.Router();
var userModel = require('./models/user');
var subjectModel = require('./models/subject');

var User = mongoose.model('User');
var Subject = mongoose.model('Subject');


//replace this with your Mongolab URL
mongoose.connect('mongodb://admin:admin@ds031952.mongolab.com:31952/helpen');

// Create our Express application
var app = express();

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

homeRoute.get(function(req, res) {
  res.status(200)
  res.json({ message: 'RESTFUL API' });
});

userRoute.options(function(req, res) {
    res.writeHead(200);
    res.end();
});

userRoute.get(function(req, res) {
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
        user.save(function(err){
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


// Start the server
app.listen(port);
console.log('Server running on port ' + port); 

