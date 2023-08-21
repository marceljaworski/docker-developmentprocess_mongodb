var express = require('express');
var path = require('path');
var fs = require('fs');
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get('/profile-picture', function (req, res) {
  var img = fs.readFileSync('profile-1.jpg');
  res.writeHead(200, {'Content-Type': 'image/jpg' });
  res.end(img, 'binary');
})

app.get('/get-profile', function (req, res) {
  var response = res;

  MongoClient.connect('mongodb://admin:password@localhst:27017', function (err, client) {
    if (err) throw err;

    var db = client.db('user-acount');
    var query = { userid: 1 };
    db.collection('users').findOne(query, function (err, result) {
      if (err) throw err;
      client.close();
      response.send(result);
    });
  });
});

app.post('/update-profile', function (req, res) {
  var userObj = req.body;
  var response = res;
  console.log('connecting to the db...')
  MongoClient.connect('mongodb://admin:password@localhst:27017', function (err, client) {
    if (err) throw err;

    var db = client.db('user-acount');
    userObj['userid'] = 1;
    var query = { userid: 1 };
    var newValues = { $set: userObj };

    console.log('connected to the user-acount db')

    db.collection('users').updateOne(query, newValues, {upsert: true}, function (err, result) {
      if (err) throw err;
      console.log('succesfully updated');
      client.close();
      response.send(userObj);
    });
  });
})


app.listen(3000, function () {
  console.log("app listening on port 3000")
})