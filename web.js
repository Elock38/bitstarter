var express = require('express');
var fs = require('fs');
var app = express();

var users = function(user, pass){
    if (user === 'snakes' && pass === 'inthegrass') {
	return true;
    }
    else {
	return false;
    }
}

app.use(express.basicAuth(function(user, pass) {
    var validUser = users(user, pass);
    if (validUser) { return true }
    else { return false } 
}));    

app.get('/', function(req, res) {
    var buffer = new Buffer(fs.readFileSync('index.html', 'utf-8'));
    res.send(buffer.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log("Listening on " + port);
});
