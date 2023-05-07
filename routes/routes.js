const express = require('express');
const router = express.Router();
const api_key = '3rE2j7mlap2LyDvbcqXY3yywtdNwhPBk';
const http    = require('http');

// Rota da página inicial
router.get('/', (req, res) => {
  if (req.query.term) {
    return res.redirect(`/search-gif?term=${req.query.term}&limit=${req.query.limit}`);
  }
  res.render('initial-page');
});

// Rota para gerar um GIF aleatório
router.get('/random', (req,res)=>{
  let url = `http://api.giphy.com/v1/gifs/random?api_key=${api_key}`

  http.get(url,(response)=>{
      response.setEncoding('utf-8');
      let body='';

      response.on('data', (d)=>{
          body+=d;
      });
      response.on('end',()=>{
          let parsed = JSON.parse(body);
          let gifData = parsed.data;
          res.render('random-gif', {gif: gifData})
      });
  });
});

// Rota para pesquisar GIFs
router.get('/search-gif', (req, res) => {
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
            res.render('giphy-search', {gifs: parsed.data});
        });
    });
});

module.exports = router;