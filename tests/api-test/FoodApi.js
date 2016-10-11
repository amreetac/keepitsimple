// RecipeFinder is the Main React Component for the Recipe Finder form.
unirest = require('unirest');

/**** Some examples of using the SPOONACULAR API with UNIREST npm module
/*
/*
These code snippets use an open-source library. http://unirest.io/nodejs
TO GET BASIC INFO ABOUT A RECIPE BY INGREDIENTS:
unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=
	apples%2Cflour%2Csugar&limitLicense=false&number=5&ranking=1")
.header("X-Mashape-Key", "HpxgpOtGRjmshLUHkFBTPp3BiwZfp1Dcykzjsn12LlQQTUNslw")
.header("Accept", "application/json")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
});
TO PERFORM A COMPLEX SEARCH:
unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/searchComplex?addRecipeInformation=false&cuisine=american&excludeIngredients=coconut%2C+mango&fillIngredients=false&includeIngredients=onions%2C+lettuce%2C+tomato&intolerances=peanut%2C+shellfish&limitLicense=false&maxCalories=1500&maxCarbs=100&maxFat=100&maxProtein=100&minCalories=150&minCarbs=5&minFat=5&minProtein=5&number=10&offset=0&query=burger&ranking=1&type=main+course")
.header("X-Mashape-Key", "gYPrulKTKnmshuLI06XFb8coTsw5p1gjhiEjsnMC7d2VWGx88j")
.header("Accept", "application/json")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
});
****/

/**** SPOONACULAR API using AXIOS
****/

function FoodApi(limit = 2) {

	this.apiKeys = {
		'simple': { apiKey: 'HpxgpOtGRjmshLUHkFBTPp3BiwZfp1Dcykzjsn12LlQQTUNslw' },
		'complex': { apiKey: 'gYPrulKTKnmshuLI06XFb8coTsw5p1gjhiEjsnMC7d2VWGx88j' },
	};

	// By using a complex search, we can get detailed recipe information for 
	// each recipe with one call to the API.
	// NOTE: since this saves multiple calls to the API, HOWEVER, for that reason
	// spoonacular counts this 1 request as 3 requests.
	// this.searchType = "searchType";

	this.baseUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com';
	// this.apiKey = this.apiKeys[this.searchType].apiKey;

	this.limit = limit;

	this.findRecipe = function(ingredientList, searchType, cb) {

		var self = this;

		var apiKey = self.apiKeys[searchType].apiKey;

		var search = self.baseUrl + (self.searchType === "complex" ?
			"/recipes/searchComplex?fillIngredients=false" :
			"/recipes/findByIngredients?fillIngredients=false");

//		var search = '/recipes/findByIngredients?fillIngredients=false';
//		var ingredients = '&ingredients=apples%2Cflour%2Csugar';
		var ingredients = '&ingredients=' + ingredientList;
		var limits = '&limitLicense=false&number=' + self.limit;
		var url = search + ingredients + limits + '&ranking=2';

		console.log("**** search string: ", url);

	    return unirest.get(url)
	    	.header("X-Mashape-Key", apiKey)
			.header("Accept", "application/json")
			.end(function (result) {
				if (result.error) {
					console.log("**** api key: ", apiKey)
					console.log("**** error response:\n", result.error)
					cb(result.error, error = true)
				} else {
	  				console.log("**** status: ", result.status);
	  				console.log("**** headers: ", result.headers);
	  				console.log("**** body: ", result.body);
	  				cb(result.body, error = false);
	  			}
  			});

/*** FOR TESTING ONLY: **
if (_api_testing_ == false) {
}
else {
		console.log("**** TESTING ****")
		// these search strings work
		var searchSimple = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=apples%2Cflour%2Csugar&limitLicense=false&number=5&ranking=1"
		var searchComplex = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/searchComplex?addRecipeInformation=true&cuisine=american&excludeIngredients=coconut%2C+mango&fillIngredients=false&includeIngredients=onions%2C+lettuce%2C+tomato&intolerances=peanut%2C+shellfish&limitLicense=true&maxCalories=1500&maxCarbs=100&maxFat=100&maxProtein=100&minCalories=150&minCarbs=5&minFat=5&minProtein=5&number=5&offset=0&query=burger&ranking=2&type=main+course";
		var searchString = self.baseUrl;
		var presetOptions="&fillIngredients=true&limitLicense=true&number=2&ranking=2";
		if (self.searchType === "simple") {
			searchString += "/recipes/findByIngredients?" +
				"&ingredients=" + 
				ingredientList +
				presetOptions;
		} else {
			searchString += "/recipes/searchComplex?addRecipeInformation=true" +
				"&includeIngredients=" + 
				ingredientList + 
				presetOptions;
		}
		console.log("**** apiKey: ", self.apiKey);
		console.log("**** searchString:\n", searchString);
		return unirest.get(searchString)
//		.header("X-Mashape-Key", "gYPrulKTKnmshuLI06XFb8coTsw5p1gjhiEjsnMC7d2VWGx88j")
		.header("X-Mashape-Key", self.apiKey)
		.header("Accept", "application/json")
		.end(function (result) {
		  console.log(result.status, result.headers, result.body);
		  cb(result.body)
		});
}
*** END TESTING ****/

	},

	this.autoCompleteFood = function(searchTerm, count, getDetails, cb) {
		// These code snippets use an open-source library.
		console.log("**** search term: ", searchTerm);
		unirest.post("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/parseIngredients")
		.header("X-Mashape-Key", "gYPrulKTKnmshuLI06XFb8coTsw5p1gjhiEjsnMC7d2VWGx88j")
		.header("Content-Type", "application/x-www-form-urlencoded")
//		.send("ingredientList=3 oz pork shoulder")
		.send("ingredientList=" + searchTerm)
		.send("servings=2")
		.end(function (result) {
		  console.log(result.status, result.headers, result.body);
		});

	},

	this.autoCompleteRecipe = function(searchTerm) {


	}
}

module.exports = FoodApi;