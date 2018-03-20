//dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

//middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static('public'));

//controller
const f8ballController = require('./controllers/f8ball.js');
app.use('/f8ball', f8ballController);










//mongoose connection
mongoose.connect('mongodb://localhost:27017/f8ball');
mongoose.connection.once('open', function(){
  console.log('f8ball is connected to mongoose');
});



//port
app.listen(3000, function(){
  console.log('f8ball is ready to answer with prophetic answers');
});
