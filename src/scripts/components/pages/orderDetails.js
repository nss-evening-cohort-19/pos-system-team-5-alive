import { getOrderItems } from '../../../api/itemData';
import clearDom from '../../helpers/clearDom';
import renderToDom from '../../helpers/renderToDom';

const orderDetails = (orderId) => {
  clearDom();
  let content = '';
  let total = 0;
  getOrderItems(orderId).then((itemsArr) => {
    if (itemsArr.length) {
      itemsArr.forEach((item) => {
        total += Number(item.price);
        content += ` <div class="order-details-card card">
      <div class="card-body">
        <h5 class="card-title">${item.item}</h5>
        <h6 class="card-subtitle mb-2">$${item.price}</h6>
        <a id="editItem--${item.firebaseKey}--${orderId}" href="#" class="card-link">Edit Item</a>
        <a id="deleteItem--${item.firebaseKey}--${item.orderId}" href="#" class="card-link">Delete Item</a>
      </div>
    </div>`;
      });
      total = total.toFixed(2);
      content += `<div class="orderDetailButtons">
    <button id="addItemBtn--${orderId}" type="button" class="btn btn-success">Add Item</button>
    <button id="paymentBtn--${orderId}--${total}" type="button" class="btn btn-primary">Go To Payment</button>
    </div>`;
      renderToDom('#main-header', `<h1>Total: $${total}</h1>`);
      renderToDom('#order-div', content);
    } else {
      content = `<h2>No Items On Order</h2><div class="orderDetailButtons">
    <button id="addItemBtn--${orderId}" type="button" class="btn btn-success">Add Item</button>
    <button id="paymentBtn--${orderId}--${total}" type="button" class="btn btn-primary">Go To Payment</button>
    </div>`;
      renderToDom('#order-div', content);
    }
  });
};

export default orderDetails;
