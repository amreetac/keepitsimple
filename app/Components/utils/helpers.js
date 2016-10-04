// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require('axios');
// var unirest = require('unirest');
// Geocoder API
var geocodeAPI = "35e5548c618555b1a43eb4759d26b260";

// unirest.post("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/products/classify")
// .header("X-Mashape-Key", "RsW6ifPSUUmshG6tH3UMXZUc9MGip1qU31IjsnAqvX1SjGB2vA")
// .header("Content-Type", "application/json")
// .header("Accept", "application/json")
// .send({"title":"Kroger Vitamin A & D Reduced Fat 2% Milk","upc":"","plu_code":""})
// .end(function (result) {
//   console.log(result.status, result.headers, result.body);
// });




// Helper Functions (in this case the only one is runQuery)
var helpers = {

	runQuery: function(location){

		console.log(location);

		//Figure out the geolocation
		var queryURL = "http://api.opencagedata.com/geocode/v1/json?query=" + location + "&pretty=1&key=" + geocodeAPI;

		return axios.get(queryURL)
			.then(function(response){

				console.log(response);
				return response.data.results[0].formatted;
		})

	}

}


// We export the helpers function (which contains getGithubInfo)
module.exports = helpers;