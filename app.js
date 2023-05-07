const path    = require('path');
const express = require('express');
const hbs1    = require('express-handlebars');
const app     = express();
const port    = 3000;
const routes  = require('./routes/routes.js');

app.engine('hbs', hbs1.engine({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts/'
}));

app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'hbs');
app.use(express.static('public'));

app.use('/', routes);

app.listen(port, ()=>{
    console.log("Listening na porta "+port);
});