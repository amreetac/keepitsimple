// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3080;
console.log(__dirname);
// Sets up the Express app to handle data parsing 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use('/', express.static(__dirname + '/public'));

/**** Hard code a list of recipes for now. ***/


(function KeepItSimple(){

// Use the FoodApi to access the Spoonacular Food Api

// var f = require('./FoodApi');
// var apiKey = "";
// var foodApi = new f(apiKey, 6);

// Routes
// =============================================================

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.listen(3080, function() {
    console.log('Timestamp: ', (Date()).toString());
    console.log('react-test App running on port 3080!');
});
// app.listen(PORT);
	
})();
