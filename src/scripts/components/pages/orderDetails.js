import { getOrderItems } from '../../../api/itemData';

const orderDetails = (orderId) => {
  getOrderItems(orderId).then((itemsArr) => {
    let content = '';
    let total = 0;
    if (itemsArr.length) {
      itemsArr.forEach((item) => {
        content += ` <div class="card">
      <div class="card-body">
        <h5 class="card-title">${item.item}</h5>
        <h6 class="card-subtitle mb-2">${item.price}</h6>
        <a href="#" class="editItem--${item.firebaseKey} card-link">Edit Item</a>
        <a href="#" class="deleteItem--${item.firebaseKey} card-link">Delete Item</a>
      </div>
    </div>`;
      });
    }
  });
};
