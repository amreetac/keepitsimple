var express = require('express');
var app = express();

var FoodApi = require('./FoodApi');

app.use('/', express.static(__dirname + '/public'));

app.listen(3000, function() {
	console.log('Timestamp: ', (Date()).toString());
	console.log('App running on port 3000!');

	var foodApi = new FoodApi();
	var recipe = foodApi.findRecipe(["Milk"]);

	console.log(recipe);
});