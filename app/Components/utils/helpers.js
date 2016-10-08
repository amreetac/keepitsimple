// // Include the axios package for performing HTTP requests (promise based alternative to request)
// var axios = require('axios');
// // var unirest = require('unirest');





// // Helper Functions (in this case the only one is runQuery)
// var helpers = {
// // runQuery: function(){
// // 	unirest.post("http://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/products/classify")
// // .header("X-Mashape-Key":"RsW6ifPSUUmshG6tH3UMXZUc9MGip1qU31IjsnAqvX1SjGB2vA", "Content-Type": "application/json","Accept": "application/json")
// // .send({"title":"Kroger Vitamin A & D Reduced Fat 2% Milk","upc":"","plu_code":""})
// // .end(function (result) {
// //   console.log(result.status, result.headers, result.body);
// // });
// // }

// 	runQuery: function(location){

// 		console.log(location);

// 		//Figure out the geolocation
// 		//var queryURL = "http://api.opencagedata.com/geocode/v1/json?query=" + location + "&pretty=1&key=" + geocodeAPI;
// 		var queryURL ="https://food2fork.com/api/search?key=119e99ed960f27a6545bf45ad0506cdb&q=shredded%20chicken;"
// 		return axios.get(queryURL)
// 		// 	//.then(function(response){

// 		// 		console.log(response.recipes.title);
// 		// 		return response;
// 		// 		//return response.data.results[0].formatted;
// 		// //})

// 	}

// }


// // We export the helpers function (which contains getGithubInfo)
// module.exports = helpers;