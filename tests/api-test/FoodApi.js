// RecipeFinder is the Main React Component for the Recipe Finder form.
import axios from 'axios';

/*
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
*/

export default class FoodApi {

	constructor(){

		this.url = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/cuisine';
		this.headers = {
			'X-Mashape-Key': 'HpxgpOtGRjmshLUHkFBTPp3BiwZfp1Dcykzjsn12LlQQTUNslw'
			'Content-Type': 'application/x-www-form-urlencoded'
			'Accept': 'application/json'
 		}

	}

	findRecipe(ingredientList) {

	    return axios.get(this.url, {
	      headers: this.headers;
	    });
	}
	
}