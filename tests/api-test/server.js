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
<<<<<<< HEAD
//var _test_case_ = "autoCompleteFood";
var _test_case_ = "autoCompleteRecipe";
=======
var _test_case_ = "autoCompleteFood";
>>>>>>> 6b1bdb0850c91c66499d2f5e2d0b804b9ccf516d

app.listen(3030, function() {
	console.log('Timestamp: ', (Date()).toString());
	console.log('api-test App running on port 3030!');

	var foodApi = new FoodApi();

	if (_test_case_ == "findRecipe") {
<<<<<<< HEAD
		console.log("++++ calling findRecipe");
=======
>>>>>>> 6b1bdb0850c91c66499d2f5e2d0b804b9ccf516d
		var result = foodApi.findRecipe("Tomato", "simple", function(response, error){

			if (!error)
			{
				console.log("++++ recipes: ", response);

	//			var recipe = response[0];

				console.log("++++ recipe: ", response[0]);
			}
<<<<<<< HEAD
			else {
				console.log("++++ error: ", error);
			}
		});
	} else if (_test_case_ == "autoCompleteFood") {
		console.log("++++ calling autoCompleteFood");
		var result = foodApi.autoCompleteFood("A", 5, true, function(response, error){
			if (!error)
			{
				console.log("++++ response: ", response);

				console.log("++++ response[0]", response[0]);;
			}
			else {
				console.log("++++ error: ", error);
			}
		});
	} else if (_test_case_ == "autoCompleteRecipe") {
		console.log("++++ calling autoCompleteRecipe");
		var result = foodApi.autoCompleteRecipe("A", 5, function(response, error){
			if (!error)
			{
				console.log("++++ response: ", response);

				console.log("++++ response[0]", response[0]);;
			}
			else {
				console.log("++++ error: ", error);
			}
		});
=======
		});
	} else if (_test_case_ == "autoCompleteFood") {
		var result = foodApi.autoCompleteFood("Apple", "complex", function(response, error){

			if (!error)
			{
				console.log("++++ food: ", response);

	//			var recipe = response[0];

	//			console.log("++++ recipe: ", response[0]);
			}
		});

>>>>>>> 6b1bdb0850c91c66499d2f5e2d0b804b9ccf516d
	}
});