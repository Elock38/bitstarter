var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var buffer;
    fs.readFileSync('index.html', function (data){
	buffer = new Buffer(data);
	buffer.toString('utf-8');
    });
    response.send(buffer);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
