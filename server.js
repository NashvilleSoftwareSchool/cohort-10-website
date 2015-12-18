var express = require('express');
var fs = require('fs');
var app = express();
var bodyParser = require('body-parser');
app.use(express.static(__dirname + '/'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


app.post('/', function (req, res) {
    
    console.log(req.body);
    fs.writeFile('charterSchoolsFinalData.json', JSON.stringify(req.body, null, 4), function(err){

        console.log('File successfully written! - Check project directory for the output.json file');

    })
});



app.listen('8081')

console.log('Magic happens on port 8081');

exports = module.exports = app;