var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');
var app = express();
var PORT = process.env.PORT || 8080;

 


//parse application
app.use(bodyParser.urlencoded({ extended: false}))

app.use(bodyParser.json())


require('./App/routing/api-routes.js')(app);
require('./App/routing/html-routes.js')(app);


app.listen(PORT, function(){
	console.log ("Server is Running at " + PORT);
});