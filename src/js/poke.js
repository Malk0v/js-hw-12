// import Handlebars from 'handlebars';
// const templates = require('../templates/card.hbs');
// const Handlebars = require('handlebars');

// import pokemonCardTpl from '../templates/card.hbs';

// module.exports = function (data) {
//   const compiledTemplate = Handlebars.compile(template);
//   return compiledTemplate(data);
// };

// const refs = {
//     cardConteiner: document.querySelector('.js - card - conteiner'),
// }

// fetch.Pokemon(5).then(renderPokemonCard).catch(error => console.log(error));

// function fetchPokemon(pokemonId) {
//     return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then(
//         response => {
//             return response.json();
//         },)
// }

// function renderPokemonCard(pokemon) {
//     const markup = pokemonCardTpl(pokemon);
//     refs.cardContainer.innerHTML = markup
// }