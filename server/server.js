const express = require('express');
const app = express();
const path = require('path');
const http = require('http').Server(app);
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname , '../dist/week4/')));

app.post('/login', function(request, response){
  let correctUsername = 'user'
  let correctPassword = '1234';
  if ((request.body.username==correctUsername) && (request.body.password==correctPassword)){
    console.log('correct');
  }
});

require('./routes.js')(app, path);
require('./listen.js')(http);
