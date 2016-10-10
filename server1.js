var express=require('express');
var fetch = require('node-fetch');
var bodyParser = require('body-parser');
var app = express();

//static path below the parser definitions
app.use('/', express.static(__dirname+'/static/'));

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json 
app.use(bodyParser.json())

app.get('/search', function(req, res){

    const apiKey = "119e99ed960f27a6545bf45ad0506cdb";
    let searchUrl = "http://food2fork.com/api/search";
    searchUrl += "?key=" + apiKey + "&q=chicken";
    fetch(searchUrl)
        .then(function(res) {
            return res.json();
        }).then(function(json) {
            console.log(json);
            res.send(json);
        });
});
app.listen(3000, function() {
    console.log('Timestamp: ', (Date()).toString());
    console.log('App running on port 3000!');
});