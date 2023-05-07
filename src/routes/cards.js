const express = require('express');
const router = express.Router();

const BASE_HANDWRYTTEN_URL = 'https://api.handwrytten.com/';

// fetches a request with exception handling
async function baseRequestHandling(options, base_url, endpoint){

  let rawResponse = {};
  let response = {};

  try{
    rawResponse = await fetch(`${base_url}${endpoint}`, options).then((response) => {
      return response;
    }).catch( _ => {
      throw new Error('Não foi possível conectar com o servidor');
    });

    // if response is ok, awaits for text conversion and after converts to json
    // needed to avoid json parsing empty object exception
    if(rawResponse.ok){
      response = await rawResponse.text();
      if(response){
        response = JSON.parse(response);
      }
      return response;
    }
  }
  catch(error){
    console.log(error.message);
    return error;
  }
}

// post to render a card with a given id
router.post('/', async (req, res) => {

  const search = req.body;

  let data = await baseRequestHandling({
    method: 'POST',
    body: JSON.stringify(search), 
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }}, BASE_HANDWRYTTEN_URL, 'v1/cards/view'); 
  
  if(data){
    res.render('cards', { data, search });
  } else {
    res.render('cards', {});
  }
});

module.exports = router;