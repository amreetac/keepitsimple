// RecipeFinder is the Main React Component for the Recipe Finder form.
unirest = require('unirest');

/**** SPOONACULAR API using UNIREST
// These code snippets use an open-source library. http://unirest.io/nodejs
unirest.post("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/cuisine")
.header("X-Mashape-Key", "HpxgpOtGRjmshLUHkFBTPp3BiwZfp1Dcykzjsn12LlQQTUNslw")
.header("Content-Type", "application/x-www-form-urlencoded")
.header("Accept", "application/json")
.send("ingredientList=3 oz pork shoulder")
.send("title=Pork roast with green beans")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
});
****/

/**** SPOONACULAR API using AXIOS

****/

function FoodApi() {

	this.baseUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com';
	this.apiKey = 'HpxgpOtGRjmshLUHkFBTPp3BiwZfp1Dcykzjsn12LlQQTUNslw';

	this.limit = 6;

	this.findRecipe = function(ingredientList, cb) {

		var search = '/recipes/findByIngredients?fillIngredients=false';
//		var ingredients = '&ingredients=apples%2Cflour%2Csugar';
		var ingredients = '&ingredients=' + ingredientList;
		var limits = '&limitLicense=false&number=' + this.limit;
		var url = this.baseUrl + search + ingredients + limits + '&ranking=2';

		// Hardcode ingredient list for now

//	    return unirest.get(url)
	    var Request =  unirest.get(url)
	    	.header("X-Mashape-Key", this.apiKey)
			.header("Accept", "application/json");

		return Request.end(function (result) {
  				console.log("**** status: ", result.status);
  				console.log("**** headers: ", result.headers);
  				console.log("**** body: ", result.body);
  				cb(result.body);
  			});

	}
}

module.exports = FoodApi;