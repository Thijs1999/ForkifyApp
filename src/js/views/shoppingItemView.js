import View from './View';
import icons from 'url:../../img/icons.svg';

class ShoppingItem extends View {
  _parentElement = '';

  _generateMarkup() {
    return `
    <li class="shopping-list__item">
        <input
        class="shopping-list__quantity"
        type="number"
        placeholder="0"
        min="0"
        />
        <span class="shopping-list__ingredient">Pizza-dough</span>
        <svg class="shopping-list__icon-minus">
            <use href="src/img/icons.svg#icon-minus-circle"></use>
        </svg>
    </li>
  `;
  }
}

export default new ShoppingItem();
