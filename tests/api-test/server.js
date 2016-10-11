
var express=require('express');
var bodyParser = require('body-parser');
var app = express();

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json 
app.use(bodyParser.json())

var FoodApi = require('./FoodApi');

app.use('/', express.static(__dirname + '/public'));

//var _test_case_ = "findRecipe";
var _test_case_ = "autoCompleteFood";

app.listen(3030, function() {
	console.log('Timestamp: ', (Date()).toString());
	console.log('api-test App running on port 3030!');

	var foodApi = new FoodApi();

	if (_test_case_ == "findRecipe") {
		var result = foodApi.findRecipe("Tomato", "simple", function(response, error){

			if (!error)
			{
				console.log("++++ recipes: ", response);

	//			var recipe = response[0];

				console.log("++++ recipe: ", response[0]);
			}
		});
	} else if (_test_case_ == "autoCompleteFood") {
		var result = foodApi.autoCompleteFood("Appl", "complex", function(response, error){

			if (!error)
			{
				console.log("++++ food: ", response);

	//			var recipe = response[0];

	//			console.log("++++ recipe: ", response[0]);
			}
		});

	}
});