var orm = require('../config/orm');

module.exports = {
	newSave: function(article, cb) {
		//console.log(article);
		var recipeArray =[article.title, article.spoonacularSourceUrl];
		var recipeObj = {article: article.title, url: article.spoonacularSourceUrl};
			orm.create('recipe', 'recipename, recipeurl', recipeArray, function(result){
				cb(recipeObj);
			});
		
	}, 
	getRecipes: function(cb) {
		orm.all('recipe', function(result) {
			cb(result);
		});
	},
	getIngredients: function(cb) {
		orm.all('ingredient', function(result) {
			console.log(result);
			cb(result);
		});
	}
}
// var newUserMysql = {
// username: username,
// password: bcrypt.hashSync(password, null, null)  // use the generateHash function in our user model
// };

// var insertQuery = "INSERT INTO users ( username, password ) values (?,?)";

// connection.query(insertQuery,[newUserMysql.username, newUserMysql.password],function(err, rows) {
// newUserMysql.id = rows.insertId;
// };