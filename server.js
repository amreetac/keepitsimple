// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var controller = require('./config/controller');
// Setup Authentication modules
var passport = require('passport');
var session  = require('express-session');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');

var flash    = require('connect-flash');


// configuration ===============================================================
// connect to our database

require('./config/passport')(passport); // pass passport for configuration




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



// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.urlencoded({
	extended: true
}));

// required for passport
app.use(session({
	secret: 'beWiseeatHealthy',
	resave: true,
	saveUninitialized: true
 } )); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// Signin routes ======================================================================
require('./public/js/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport



/**** Hard code a list of recipes for now. ***/


(function KeepItSimple(){

// Use the FoodApi to access the Spoonacular Food Api

var f = require('./FoodApi');
var apiKey = "";
var foodApi = new f(apiKey, 6);

// Routes
// =============================================================


//Added home route



// Added pantry route

// app.get('/ingredient', function(req, res){
// 	res.sendFile(path.join(__dirname, '/public/ingredient.html'));
// })
// // Search for Specific Character (or all ingredients) - provides JSON
// app.get('/ingredient/:ingredient?', function(req, res){
//     var chosen = req.params.ingredient;
//     if(chosen){
//         console.log(2);
//         // NOTE: the findRecipe takes a callback function.
//         // This is necessary so it doesn't have to wait before
//         // returning from the unirest call. Otherwise, it would
//         // return too early and we would not have the data yet.   
//         var result = foodApi.autoCompleteFood(chosen, function(ingredient){
//         console.log(3);
//              // Just send one recipe for now, later send entire array

//             res.json(ingredient);

//         });
       
//     }
// });


// Added about route

// app.get('/about', function(req, res){
// 	res.sendFile(path.join(__dirname, '/public/about.html'));
// })

// app.get('/signin', function(req, res){
// 	res.sendFile(path.join(__dirname, '/public/signin.html'));
// })


// Basic route that sends the user first to the AJAX Page
app.get('/recipe', function(req, res){
	//res.sendFile(path.join(__dirname, '/public/recipe.html'));

	res.json(foodApi.findRecipe());

})

// Search for Specific Character (or all characters) - provides JSON

app.get('/recipe/:ingredient?', function(req, res){
	console.log(1);
	var term = req.params.ingredient;

	console.log("search term: ", term);
	console.log("req.params: ", req.params);

	if(term){
		console.log(2);

		// NOTE: the findRecipe takes a callback function.
		// This is necessary so it doesn't have to wait before
		// returning from the unirest call. Otherwise, it would
		// return too early and we would not have the data yet.
		var result = foodApi.findRecipe(term, "complex", function(recipes){
		console.log(3);

			console.log("[GET /api/:ingredients] recipes : ", recipes);

			// Just send one recipe for now, later send entire array
			res.json(recipes);

		});
	}
})

app.post('/newrecipe', function(req, res){
	controller.newSave(req.body, function(recipeData) {
		res.json(recipeData);
	});
	// res.status(200).end();
	// res.json(req.body)
})

app.get('/allrecipes', function(req, res){
	controller.getRecipes(function(recipeData) {
		res.json(recipeData);
	});
	// res.status(200).end();
	// res.json(req.body)

})

//to get all the ingredients for the pantry page
app.get('/allingredients', function(req, res){
	controller.getIngredients(function(ingredientData) {
		console.log(res);		
		res.json(ingredientData);

	});
	// res.status(200).end();
	// res.json(req.body)

})
app.get('*', function(req, res){
	res.sendFile(path.join(__dirname, '/public/index.html'));
	//res.redirect(path.join(__dirname, '/landingpage'));
})
// app.get('/ingredient', function(req, res){
//    res.sendFile(path.join(__dirname, 'ingredient.html'));
// })

// // Search for a list of matching ingredients following using
// // an autocomplete algorithm to help the user select an item
// // For now, just display the first item in the list.
// app.get('/ingredient/:ingredient?', function(req, res){
//    var chosen = req.params.ingredient;
//    if(chosen){
//        console.log(2);

//        var result = foodApi.autoCompleteFood(chosen, 1, true, function(ingredient){
//        console.log(3);
//             // Just send one recipe for now, later send entire array

//            res.json(ingredient);

//        });
      
//    }
// });


// app.listen(3000, function() {
//     console.log('Timestamp: ', (Date()).toString());
//     console.log('KeepItSimple App running on port 3000!');
// });
app.listen(PORT);
	
})();
