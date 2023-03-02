import pokemonCardTpl from '../templates/card.hbs';

console.log(pokemonCardTpl);

const refs = {
  cardContainer: document.querySelector('.js-card-conteiner'),
};

console.log(refs.cardContainer);

fetchPokemon(6)
  .then(renderPokemonCard)
    .catch(error => console.log(error));
  
function fetchPokemon(pokemonId) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        .then(
            response => {
                return response.json();
            },
        );
}

function renderPokemonCard(pokemon) {
    const markup = pokemonCardTpl(pokemon);
    refs.cardContainer.insertAdjacentHTML('beforeend' , markup);

}
