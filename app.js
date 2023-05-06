const express    = require('express');
const exphbs     = require('express-handlebars');
const app    = express();
const path = require('path');
const db     = require('./db/connection')
const bodyParser    = require('body-parser');
const Job = require('./models/job');
const Sequelize  = require('sequelize');
const Op         = Sequelize.Op;
var giphy = require('giphy-api')('3rE2j7mlap2LyDvbcqXY3yywtdNwhPBk');

const PORT = 3000; // constante

giphy.random(function (err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res.data.url);
  }
});

app.get('/gifs',(req,res)=>{
  console.log(res);
});

app.listen(PORT, function() {
    console.log(`listening on port ${PORT}`);
});

//body-parser
app.use(bodyParser.urlencoded({extended: false}));

// handle bars
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// pastas estaticas
app.use(express.static(path.join(__dirname, 'public')));

// sqlite
db
    .authenticate()
    .then(() => {
        console.log("Conectou com sucesso")
    })
    .catch(err => {
        console.log("CONEXÃO DEU ERRO",err)
    });
// routes
app.get('/', (req, res) => {

    let search = req.query.job;
    let query  = '%'+search+'%'; // PH -> PHP, Word -> Wordpress, press -> Wordpress
  
    if(!search) {
      Job.findAll({order: [
        ['createdAt', 'DESC']
      ]})
      .then(jobs => {
    
        res.render('index', {
          jobs
        });
    
      })
      .catch(err => console.log(err));
    } else {
      Job.findAll({
        where: {title: {[Op.like]: query}},
        order: [
          ['createdAt', 'DESC']
      ]})
      .then(jobs => {
        console.log(search);
        console.log(search);
    
        res.render('index', {
          jobs, search
        });
    
      })
      .catch(err => console.log(err));
    }

});

// jobs routes
app.use('/jobs',require('./routes/jobs'));
