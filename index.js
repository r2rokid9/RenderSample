var express = require('express'); // We will make use of the express API
var app = express();

var bodyParser = require('body-parser'); // Included in express already
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req,res)
{
    res.sendFile(__dirname + '\\' + 'index.html');
});

app.post('/submit-student-data', function(req,res)
{
    var name = req.body.firstName + ' ' + req.body.lastName;

    res.send(name + ' Submitted Successfully!');
});

app.get('/submit-student-data', function(req,res)
{
    res.send ("Invalid acccess attempted");
});

var port = process.env.PORT || 5000;

var server = app.listen(port, function()
{
    console.log("Listening...");
});