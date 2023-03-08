import pokemonCardTpl from '../templates/card.hbs';
import Notiflix from 'notiflix';
import '../css/pokeStyle.css';

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';

Notiflix.Notify.success('добро пожаловать');

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
    .catch(onFetchError)
    .finally(() => form.reset());
}

function fetchPokemon(pokemonId) {
  return fetch(`${BASE_URL}${pokemonId}`).then(response => {
    return response.json();
  });
}

function renderPokemonCard(pokemon) {
  const markup = pokemonCardTpl(pokemon);
  refs.cardContainer.insertAdjacentHTML('beforeend', markup);
}

function onFetchError(error) {
  Notiflix.Notify.info('нет такого')
}
