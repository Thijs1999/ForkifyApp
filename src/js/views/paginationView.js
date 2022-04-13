import View from './View';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkup() {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    console.log(this._data);
    // Page 1, there are other pages
    if (this._data.page === 1 && numPages > 1) {
      return 'Page 1, others';
    }

    // Last page
    if (this._data.page === numPages && numPages > 1) {
      return `
        <button class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
                <use href="src/img/icons.svg#icon-arrow-left"></use>
            </svg>
            <span>Page </span>
        </button>
      `;
    }
    // Other page
    if (this._data.page < numPages) {
      return 'Other page';
    }

    // Page 1, asnd there are NO other pages
    return 'Only one page';
  }
}

export default new PaginationView();
