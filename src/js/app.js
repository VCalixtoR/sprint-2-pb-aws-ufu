const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');

const PORT = 8000;
const PROJECT_PATH = process.cwd();
const VIEWS_PATH = path.join(PROJECT_PATH, 'src', 'views');
const STATIC_PATH = path.join(PROJECT_PATH, 'src', 'public');
const ROUTES_PATH = path.join(PROJECT_PATH, 'src', 'routes');

// body parser and express
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// index file for default endpoint
app.get('/', function(req, res){
  res.render('index');
});

// handle bars
app.set('views', VIEWS_PATH);
app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//helpers
const Handlebars = require('handlebars');
Handlebars.registerHelper('limit', function(arr, limit) {
  if (!Array.isArray(arr)) { return []; }
  return arr.slice(0, limit);
});

// default static folder - used in html rendering
app.use(express.static(STATIC_PATH));

// listening port
app.listen(PORT, function(){
  console.log(`Working in: http://localhost:${PORT}/`);
});

// routes
app.use('/card', require(path.join(ROUTES_PATH, 'cards.js')));