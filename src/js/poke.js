import pokemonCardTpl from '../templates/card.hbs';

console.log(pokemonCardTpl);

const refs = {
  cardContainer: document.querySelector('.js-card-conteiner'),
  searchForm: document.querySelector('.js-search-form'),
};

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const searchForm = form.elements.query.value;

  fetchPokemon(searchForm)
    .then(renderPokemonCard)
    .catch(error => console.log(error))
    .finally(() => form.reset());
}

function fetchPokemon(pokemonId) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then(
    response => {
      return response.json();
    }
  );
}

function renderPokemonCard(pokemon) {
  const markup = pokemonCardTpl(pokemon);
  refs.cardContainer.insertAdjacentHTML('beforeend', markup);
}
