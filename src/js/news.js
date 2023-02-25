console.log('hello world');

const refs = {
    searchForm: document.querySelector(".js-search-form"), 
    articlesContainer: document.querySelector('.js-articles-container'),
};

console.log(refs.searchForm);
console.log(refs.articlesContainer);

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
    e.preventDefault();

    const searchQuery = e.currentTarget.elements.query.value;

    const options = {
        headers: {
            Authorization: '4330ebfabc654a6992c2a7923173a3',
        }
    }

    const url =
        url = `https: //newsapt.org/v2/everything?q=${searchQuery}&language=en&pageSize=56page=1`;
    
    fetch(url, options).then(r => r.json()).then(console.log);
}