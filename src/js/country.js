import country from '../templates/country.hbs';
import data from './components/country.json';
const body = document.querySelector('.js-markup');

console.log(country);
console.log(data);

const markup = country(data)

console.log(markup);

body.insertAdjacentHTML('afterbegin', markup);

