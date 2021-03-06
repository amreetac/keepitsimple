import axios from 'axios';

const Api = {
	newRecipe: function(article) {
		return axios.post('/newrecipe', article);
	},
	getRecipes: function() {
		return axios.get('/allrecipes');
	},
	getIngredients: function() {
		return axios.get('/allingredients');
	}
}

export default Api;