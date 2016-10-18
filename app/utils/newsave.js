var orm = require('../config/orm');

module.exports = {
	newSave: function(article) {
		//save to database
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