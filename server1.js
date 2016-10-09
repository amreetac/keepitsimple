// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var axios = require('axios');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;
console.log(__dirname);
// Sets up the Express app to handle data parsing 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use('/', express.static(__dirname + '/public'));

// Star Wars Characters (DATA)
// =============================================================
var recipes = [

	{
		routeName: "allrecipes",
		title: "All Recipes",
		source_url: "http://allrecipes.com/Recipe/Slow-Cooker-Chicken-Tortilla-Soup/Detail.aspx",
		image_url: "http://static.food2fork.com/19321150c4.jpg"
	},

	{
		routeName: "macandcheese",
		title: "Mac and Cheese with Roasted Chicken, Goat Cheese, and Rosemary",
		source_url: "http://www.mybakingaddiction.com/mac-and-cheese-roasted-chicken-and-goat-cheese/",
		image_url: "http://static.food2fork.com/MacandCheese1122b.jpg"
	},

	{
		routeName: "baconwrapped",
		title: "Bacon Wrapped Buffalo Chicken Jalapeno Poppers",
		role: "http://www.closetcooking.com/2012/03/bacon-wrapped-buffalo-chicken-jalapeno.html",
		age: "http://static.food2fork.com/Bacon2BWrapped2BBuffalo2BChicken2BJalapeno2BPoppers2B5002B3668e0d793a2.jpg"
	},

	{
		routeName: "buffalochicken",
		title: "Buffalo Chicken Grilled Cheese Sandwich",
		source_url: "http://www.closetcooking.com/2011/08/buffalo-chicken-grilled-cheese-sandwich.html",
		image_url: "http://static.food2fork.com/Buffalo2BChicken2BPotato2BSkins2B5002B5802a7cf6f8f.jpg"
	}
]

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get('/recipe', function(req, res){
	res.sendFile(path.join(__dirname, '/public/recipe.html'));
})
app.get('/search', function(req, res){

	axios.get("http://food2fork.com/api/search?key=119e99ed960f27a6545bf45ad0506cdb&q=chicken")
	.then(function(response){
		res.send(response)
	})
})
// export default {
//   get: () => {
// // get: (url) => {
//     return axios.get(rootUrl, {
//       headers: {
//       	"key": "119e99ed960f27a6545bf45ad0506cdb"
//         // "X-Mashape-Key": "RsW6ifPSUUmshG6tH3UMXZUc9MGip1qU31IjsnAqvX1SjGB2vA",
//         // "Content-Type": "application/json",
//         // "Accept": "application/json"     
//       }
//     });
//   }
// }


// app.get('/add', function(req, res){
// 	res.sendFile(path.join(__dirname, 'add.html'));
// })

// app.get('/all', function(req, res){
// 	res.sendFile(path.join(__dirname, 'all.html'));
// })

// Search for Specific Character (or all characters) - provides JSON
app.get('/api/:recipes?', function(req, res){

	var chosen = req.params.recipes;
console.log(chosen);
	if(chosen){
		console.log(chosen);

		for (var i=0; i <recipes.length; i++){

			if (chosen == recipes[i].routeName){
				res.json(recipes[i]);
				return;
			}
		}

		res.json(false);
	}

	else{
		res.json(recipes);
	}
})

// // Create New Characters - takes in JSON input
// app.post('/api/new', function(req, res){

// 	var newcharacter = req.body;
// 	newcharacter.routeName = newcharacter.name.replace(/\s+/g, '').toLowerCase()

// 	console.log(newcharacter);

// 	characters.push(newcharacter);

// 	res.json(newcharacter);
// })

// // Starts the server to begin listening 
// // =============================================================
// // app.listen(PORT, function(){
// // 	console.log('App listening on PORT ' + PORT);
// // })

app.listen(3000, function() {
    console.log('Timestamp: ', (Date()).toString());
    console.log('App running on port 3000!');
});