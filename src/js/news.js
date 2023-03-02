import NewsApiService from "./components/load-more";

const refs = {
  searchForm: document.querySelector('.js-search-form'),
  articlesContainer: document.querySelector('.js-articles-container'),
  loadMoreBtn: document.querySelector('[data-action="load-more"]'),
};


console.log(refs.searchForm)
console.log(refs.articlesContainer)
console.log(refs.loadMoreBtn);

const newsApiService = new NewsApiService();

console.log(newsApiService);

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);


function onSearch(e) {
  e.preventDefault();

  newsApiService.query = e.currentTarget.elements.query.value;
  newsApiService.resetPage();
  newsApiService.fetchArticles();
}

function onLoadMore() {
  newsApiService.fetchArticles();
}
