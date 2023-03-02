export default class NewApiServise {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchArticles() {
    const options = {
      headers: {
        Authorization: '1207c88ea12a40948c6a5f2f9fe75304',
      },
    };

    const url = `https://newsapi.org/v2/everything?q=${this.searchQuery}&pageSize=5&page=${this.page}`;

    fetch(url, options)
      .then(r => r.json())
      .then(data => {
        this.incrementPage();
      });
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
};