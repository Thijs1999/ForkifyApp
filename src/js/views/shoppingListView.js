import View from './View';
import shoppingItemView from './shoppingItemView';
import icons from 'url:../../img/icons.svg';

class ShoppingListView extends View {
  _parentElement = document.querySelector('shopping-list');
  _errorMessage =
    'No item on your shopping list yet, click the checkmark button to add ingredients to your shopping list';
  _message = '';

  addHandlerRenderer(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    return this._data
      .map(shoppingItem => shoppingItemView.render(shoppingItem, false))
      .join('');
  }
}

export default new BookmarkView();
