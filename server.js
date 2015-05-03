// Get the packages we need
var express = require('express');
var mongoose = require('mongoose');
var Llama = require('./models/llama');
var helpenAPI = require('./models/helpenAPI');
var bodyParser = require('body-parser');
var router = express.Router();


// Create our Express application
var app = express();

// Use environment defined port or 4000
var port = process.env.PORT || 4000;

//Allow CORS so that backend and frontend could pe put on different servers
var allowCrossDomain = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept");
  next();
};
app.use(allowCrossDomain);



// Use the body-parser package in our application
app.use(bodyParser.urlencoded({
  extended: true
}));

// All our routes will start with /api
app.use('/api', router);

//Default route here
var homeRoute = router.route('/');

homeRoute.get(function(req, res) {
  res.json({ message: 'Hello World!' });
});

//Llama route 
var llamaRoute = router.route('/llamas');

llamaRoute.get(function(req, res) {
  res.json([{ "name": "alice", "height": 12 }, { "name": "jane", "height": 13 }]);
});

//Add more routes here





app.get('/api/users',helpenAPI.getUser);
app.post('/api/users',helpenAPI.findAll);

app.get('/api/users/:id',helpenAPI.getUserById);
app.put('/api/users/:id',helpenAPI.findAll);
app.delete('/api/users/:id',helpenAPI.findAll);

app.get('/api/tasks',helpenAPI.findAll);
app.post('/api/tasks',helpenAPI.findAll);

app.get('/api/tasks/:id',helpenAPI.findAll);
app.put('/api/tasks/:id',helpenAPI.findAll);
app.delete('/api/tasks/:id',helpenAPI.findAll);









// Start the server
app.listen(port);
console.log('Server running on port ' + port); 