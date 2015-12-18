var express = require('express');
var fs = require('fs');
var app = express();
var bodyParser = require('body-parser');
var http = require('http');

app.use(express.static(__dirname + '/'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


// ***** Gets data from ajax calls in main.js and writes to one main file.

// app.post('/', function (req, res) {

//     fs.writeFile('test.json', JSON.stringify(req.body, null, 4), function(err){

//         console.log('File successfully written! - Check project directory for the output.json file');

//     })
// });

fs.readFile('test.json', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var parsedData = JSON.parse(data);
  //console.log(parsedData.studenthtml);
  var htmlData = "";
  for (var i=0; i < parsedData.studenthtml.length; i++) {
    htmlData += "<li class='student-list'>" +
      "<div class='profile-cell'>" +
         "<a class='studentlink' href='" + parsedData.studenthtml[i].site.toString() + "'>" +
         "<div class='crop'>" +
            "<img class='student-pic' mouseover-src='images/" + parsedData.studenthtml[i].image.toString() + "' src='images/" + parsedData.studenthtml[i].imageProp.toString() + "'>" +
          "</div>" +
          "<h6 class='student-name'>" + parsedData.studenthtml[i].name.toString() + "</h6></a>" +
        "<span class='student-bio'>" + parsedData.studenthtml[i].bio.toString() + "</span>" +
      "</div>" +
    "</li>"
  }
  console.log(htmlData);
  fs.writeFile('students.html', htmlData, 'utf8', function (data) {

    console.log(data);
  });
});


app.listen('8081')

console.log('Magic happens on port 8081');

exports = module.exports = app;