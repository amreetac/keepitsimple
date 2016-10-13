// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

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

/**** Hard code a list of recipes for now. ***/


(function KeepItSimple(){

// Use the FoodApi to access the Spoonacular Food Api
var f = require('./FoodApi');

var foodApi = new f();

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get('/recipe', function(req, res){
	//res.sendFile(path.join(__dirname, '/public/recipe.html'));

	res.json(foodApi.findRecipe());

})

//Added home route

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, '/public/landing.html'));
})

// Added pantry route

app.get('/ingredient', function(req, res){
	res.sendFile(path.join(__dirname, '/public/ingredient.html'));
})
// Search for Specific Character (or all ingredients) - provides JSON
app.get('/ingredient/:ingredient?', function(req, res){
    var chosen = req.params.ingredient;
    if(chosen){
        console.log(2);
        // NOTE: the findRecipe takes a callback function.
        // This is necessary so it doesn't have to wait before
        // returning from the unirest call. Otherwise, it would
        // return too early and we would not have the data yet.   
        var result = foodApi.autoCompleteFood(chosen, function(ingredient){
        console.log(3);
             // Just send one recipe for now, later send entire array

            res.json(ingredient);

        });
       
    }
});


// Added about route

app.get('/about', function(req, res){
	res.sendFile(path.join(__dirname, '/public/about.html'));
})

app.get('/signin', function(req, res){
	res.sendFile(path.join(__dirname, '/public/signin.html'));
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

app.get('/ingredient', function(req, res){
   res.sendFile(path.join(__dirname, 'ingredient.html'));
})

// Search for a list of matching ingredients following using
// an autocomplete algorithm to help the user select an item
// For now, just display the first item in the list.
app.get('/ingredient/:ingredient?', function(req, res){
   var chosen = req.params.ingredient;
   if(chosen){
       console.log(2);

       var result = foodApi.autoCompleteFood(chosen, 1, true, function(ingredient){
       console.log(3);
            // Just send one recipe for now, later send entire array

           res.json(ingredient);

       });
      
   }
});

app.listen(3000, function() {
    console.log('Timestamp: ', (Date()).toString());
    console.log('KeepItSimple App running on port 3000!');
});

	
})();
