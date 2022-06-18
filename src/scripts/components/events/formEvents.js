import { createOrder, editOrder, getOrders } from '../../../api/orderData';
import showOrders from '../pages/viewOrders';
import { createItem } from '../../../api/itemData';
import orderDetails from '../pages/orderDetails';

const formEvents = (uid) => {
  document.querySelector('#form-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-item')) {
      const [, orderId] = e.target.id.split('--');
      const itemObj = {
        item: document.querySelector('#item-name').value,
        price: document.querySelector('#item-price').value,
        orderId
      };
      createItem(itemObj).then(() => orderDetails(orderId));
    }

    if (e.target.id.includes('create-order')) {
      const orderObj = {
        name: document.querySelector('#name').value,
        email: document.querySelector('#email').value,
        type: document.querySelector('#type').value,
        uid
      };
      console.warn(orderObj);
      createOrder(orderObj, uid).then((orderArray) => {
        showOrders(orderArray);
      });
    }

    if (e.target.id.includes('edit-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      const orderObj = {
        name: document.querySelector('#name').value,
        // phone: document.querySelector('#phone').value,
        email: document.querySelector('#email').value,
        type: document.querySelector('#type').value,
        uid,
        firebaseKey
      };
      editOrder(orderObj, uid).then(() => {
        getOrders(uid).then((orderArray) => showOrders(orderArray));
      });
    }
  });
  document.querySelector('#form-container').addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.id.includes('cancelBtn')) {
      const [, orderId] = e.target.id.split('--');
      orderDetails(orderId);
    }
  });
};

export default formEvents;
