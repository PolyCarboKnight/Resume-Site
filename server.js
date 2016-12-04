var express = require("express");
var app = express();
var mongojs = require("mongojs");
var db = mongojs("resume", ["resume"]);
var bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(express.static(__dirname + "/public"));

app.get("/resume", function(request, response)
{
	db.resume.find(function(error, docs)
	{
		console.log(docs);
		response.json(docs);
	});
});
	
app.listen(80);

console.log("Server running on port 80");
