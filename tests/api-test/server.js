
var express=require('express');
var bodyParser = require('body-parser');
var app = express();

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json 
app.use(bodyParser.json())

var FoodApi = require('./FoodApi');

app.use('/', express.static(__dirname + '/public'));

app.listen(3030, function() {
	console.log('Timestamp: ', (Date()).toString());
	console.log('api-test App running on port 3000!');

	var foodApi = new FoodApi();
	var result = foodApi.findRecipe("Tomato", "simple", function(response, error){

		if (!error)
		{
			console.log("++++ recipes: ", response);

//			var recipe = response[0];

			console.log("++++ recipe: ", response[0]);
		}
	});
});