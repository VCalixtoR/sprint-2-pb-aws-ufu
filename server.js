const http    = require('http');
const path    = require('path');
const express = require('express');
const hbs1     = require('express-handlebars');
const app     = express();
const port    = 3001;
const api_key = '3rE2j7mlap2LyDvbcqXY3yywtdNwhPBk';

app.engine('hbs', hbs1.engine({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts/'
}));

app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'hbs');
app.use(express.static('public'));

app.get('/', (req,res)=>{
    let queryString = req.query.term;
    let limit       = req.query.limit || 10;
    let term        = encodeURIComponent(queryString);
    let url         = `http://api.giphy.com/v1/gifs/search?q=${term}&api_key=${api_key}&limit=${limit}&rating=pg-13`

    http.get(url,(response)=>{
        response.setEncoding('utf-8');
        let body='';

        response.on('data', (d)=>{
            body+=d;
        });
        response.on('end',()=>{
            let parsed = JSON.parse(body);
            res.render('search-giphy', {gifs: parsed.data})
        });
    });
});

app.listen(port, ()=>{
    console.log("Listening na porta "+port);
});