import clearDom from '../../helpers/clearDom';
import renderToDom from '../../helpers/renderToDom';

const addItem = (obj = {}, orderId) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-item--${obj.firebaseKey}` : `submit-item--${orderId}`}">
  <div class="mb-3">
    <label for="item-name" class="form-label">Item Name</label>
    <input type="text" class="form-control" id="item-name" value="${obj.item || ''}" required>
  </div>
  <div class="mb-3">
    <label for="item-price" class="form-label">Item Price</label>
    <input type="text" class="form-control" id="item-price" value ="${obj.price || ''}">
  </div>
  <button id="item-form-btn" type="submit" class="btn btn-primary">"${obj.firebaseKey} ? Update Item : Submit Item"</button>
</form>
`;

  renderToDom('#form-container', domString);
};

export default addItem;
