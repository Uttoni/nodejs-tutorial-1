var express = require('express');
var todoController = require('./controllers/todoController.js')

var app = express();

//Set up TEMPLATE
app.set('view engine', 'ejs');

//Set up STATIC FILES
app.use(express.static('./public'));

//Fire CONTROLLERS
todoController(app);

//Listen to port
app.listen(3000);
console.log('Listening or port 3000...');