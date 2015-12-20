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


// All filenames for student data.
var urls = [
    'Tom_Griffey.json'
];

var finalJson = {students: []};

for (var i=0; i < urls.length; i++) {
    url = '_students/' + urls[i];
    fs.readFile(url, 'utf8', function (err, data) {
      if (err) {
        return console.log(err);
      }
      
      console.log(data);
      data = JSON.parse(data);
      finalJson.students.push(data);
      
    });    
}

setTimeout(function () {
    fs.writeFile('all_students.json', JSON.stringify(finalJson, null, 4), function (err) {
        console.log("File written");
    });    
}, 5000)




setTimeout(function () {
    fs.readFile('all_students.json', 'utf8', function (err,data) {
      if (err) {
        return console.log(err);
      }
      var parsedData = JSON.parse(data);
      //console.log(parsedData.students);
      var htmlData = "";
      for (var i=0; i < parsedData.students.length; i++) {
        htmlData += "<li class='student-list'>" + "\n" + "  " +
          "<div class='profile-cell'>" + "\n" + "     " +
            "<a class='studentlink' href='" + parsedData.students[i].site.toString() + "'>" + "\n" + "        " +
                "<div class='crop'>" + "\n" + "            " +
                    "<img class='student-pic' mouseover-src='images/2015_12_02_NSS_" + parsedData.students[i].imageProp.toString() + "_T.jpg' src='images/2015_12_02_NSS_" + parsedData.students[i].image.toString() + "_T_BW.jpg'>" + "\n" + "        " +
                "</div>" + "\n" + "        " +
                "<h6 class='student-name'>" + parsedData.students[i].name.toString() + "</h6>" + "\n" + "    " +
            "</a>" + "\n" + "    " +
            "<span class='student-bio'>" + parsedData.students[i].bio.toString() + "</span>" + "\n" + "  " +
          "</div>" + "\n" +
        "</li>" + "\n"
      }
      console.log(htmlData);
      fs.writeFile('students.html', htmlData, 'utf8', function (data) {

        console.log(data);
      });
    });
}, 10000)



app.listen('8081')

console.log('Magic happens on port 8081');

exports = module.exports = app;