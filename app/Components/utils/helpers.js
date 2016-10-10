// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require('axios');

// Helper Class (for now, the only method is findRecipe)
function Helper(){

	this.findRecipe = function(ingredients){

 		console.log(ingredients);

		return axios.get('/recipe/:' + ingredients)
			.then(function(response){

				console.log(response);

				return response.data.results;
		})
	}
}


// // We export the helper class
module.exports = Helper;