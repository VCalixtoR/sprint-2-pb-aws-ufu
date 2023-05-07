const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const Constants = require('./constants')

// body parser and express
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// index file for default endpoint
app.get('/', function(req, res){
  res.render('index');
});

// handle bars
app.set('views', Constants.VIEWS_PATH);
app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//helpers
const Handlebars = require('handlebars');
Handlebars.registerHelper('limit', function(arr, limit) {
  if (!Array.isArray(arr)) { return []; }
  return arr.slice(0, limit);
});

// default static folder - used in html rendering
app.use(express.static(Constants.STATIC_PATH));

// listening port
app.listen(Constants.PORT, function(){
  console.log(`Working in: http://localhost:${Constants.PORT}/`);
});

// routes
app.use('/card', require(path.join(Constants.ROUTES_PATH, 'cards.js')));