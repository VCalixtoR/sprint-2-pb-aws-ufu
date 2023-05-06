const express = require('express');
const router = express.Router();
const Job = require('../models/Job.js');

router.get('/test', (req, res) => {
    res.send('deu certo');
});


// detalhe da vaga -> view/1, view/2
router.get('/view/:id', (req, res) => Job.findOne({
    where: {id: req.params.id}
  }).then(job => {
  
    res.render('view', {
      job
    });
  
  }).catch(err => console.log(err)));

// simplesmente abre a view de ADD
router.get('/add', (req,res) =>{
    res.render('add');
})

// add job por método HTTP POST
router.post('/add', (req,res) => {

    let {title, salary, company, description, email, new_job} = req.body;

    //insert table
    Job.create({title,
        description,
        salary,
        company,
        email,
        new_job
    })
    .then(() => res.redirect('/')) // Adiciona vaga e volta pra home
    .catch(err => console.log(err));
})

module.exports = router