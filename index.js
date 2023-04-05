const request = require('request');

request.get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0', (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }

  const parse = JSON.parse(body);
  
  const object = {
    count: parse.count,
    next: parse.next,
    previous: parse.previous,
    results: parse.results
  };
  
  const jsonFormat = JSON.stringify(object, null, 2);
  console.log(jsonFormat);
  //console.log(body);
});

// const fetch = require("node-fetch");
// fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
//   .then((respuesta) => {
//     return respuesta.json()
//   }).then((resp) => {
//     console.log(resp);
//     console.log(resp.name);
//   })