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

/**** SPOONACULAR API using unirest ****/

/* FoodApi constructor takes the following args 
	apiKeys: an array of mashape api keys to access spoonacular api
		simple: used for simple searches from spoonacular 
		complex: used for complex search from spoonacular
*/ 
function FoodApi(apiKeys, limit) {

	if (apiKeys === "") {

		this.apiKeys = {
			 'simple': { apiKey: 'HpxgpOtGRjmshLUHkFBTPp3BiwZfp1Dcykzjsn12LlQQTUNslw' },
			 'complex': { apiKey: 'gYPrulKTKnmshuLI06XFb8coTsw5p1gjhiEjsnMC7d2VWGx88j' },
			
		};

	} else {

		this.apiKeys = apiKeys;

	}
	// By using a complex search, we can get detailed recipe information for 
	// each recipe with one call to the API.
	// NOTE: since this saves multiple calls to the API, HOWEVER, for that reason
	// spoonacular counts this 1 request as 3 requests.
	// this.searchType = "searchType";

	this.baseUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com';

	this.limit = limit;

	/* findRecipe(ingredientList, searchType, cb)
		ingredientList: string of ingredients with comma seperator for better results
		searchType: string = complex/simple for depending on required data
		cb: call back function returns array of recipes as json obj  */

	this.findRecipe = function(ingredientList, searchType, cb) {

		var self = this;

		var apiKey = self.apiKeys[searchType].apiKey;

		var search = self.baseUrl + (searchType === "complex" ?
			"/recipes/searchComplex?addRecipeInformation=true&includeIngredients=":
			"/recipes/findByIngredients?fillIngredients=false&ingredients=");

		var limits = '&limitLicense=false&number=' + self.limit;
		var url = search + ingredientList + limits + '&ranking=2';

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
	  				cb((searchType === "complex" ? result.body.results: result.body), error = false);
	  			}
  			});

	},


	/* autoCompleteFood(searchTerm, count, getDetails, cb)
		searchTerm: string of ingredients with comma seperator for better results
		count: number of results
		getDetails: 
		cb: call back function returns array of recipes as json obj  */

	this.autoCompleteFood = function(searchTerm, count, getDetails, cb) {
		// These code snippets use an open-source library.
		console.log("**** food search term: ", searchTerm);

		var self = this;

		var search = self.baseUrl + "/food/ingredients/autocomplete?";

		var metaInfo = 'metaInformation=' + getDetails;
		var number = '&number=' + count;
		var query = '&query=' + searchTerm;
		var url = search + metaInfo + number + query;

		console.log("**** search string: ", url);

	    return unirest.get(url)
		.header("X-Mashape-Key", self.apiKeys["complex"].apiKey)
		.header("Accept", "application/json")
		.end(function (result) {
			if (result.error) {
				console.log("**** error response:\n", result.error)
				cb(result.error, error = true)
			} else {
  				console.log("**** status: ", result.status);
  				console.log("**** headers: ", result.headers);
  				console.log("**** body: ", result.body);
  				cb(result.body, error = false);
  			}
		});

	},

	/* autoCompleteRecipe(searchTerm, count, cb)
		searchTerm: string of recipes with comma seperator for better results
		count: number of results
		getDetails: 
		cb: call back function returns array of recipes as json obj  */

	this.autoCompleteRecipe = function(searchTerm, count, cb) {
		console.log("**** recipe search term: ", searchTerm);

		var self = this;

		var search = self.baseUrl + "/recipes/autocomplete?";
		var number = "number=" + count;
		var query = "&query=" + searchTerm;

		var url = search + number + query;

		console.log("**** search string: ", url);

		unirest.get(url)
		.header("X-Mashape-Key", self.apiKeys["complex"].apiKey)
		.header("Accept", "application/json")
		.end(function (result) {
			if (result.error) {
				console.log("**** error response:\n", result.error)
				cb(result.error, error = true)
			} else {
  				console.log("**** status: ", result.status);
  				console.log("**** headers: ", result.headers);
  				console.log("**** body: ", result.body);
  				cb(result.body, error = false);
  			}
		});
	}
}

module.exports = FoodApi;