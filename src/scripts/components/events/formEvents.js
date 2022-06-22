import { createOrder, editOrder, getOrders } from '../../../api/orderData';
import { showOrders } from '../pages/viewOrders';
import { createItem, updateItem } from '../../../api/itemData';
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

    if (e.target.id.includes('update-item')) {
      const [, firebaseKey, orderId] = e.target.id.split('--');
      console.warn(orderId);
      const itemObj = {
        item: document.querySelector('#item-name').value,
        price: document.querySelector('#item-price').value,
      };
      updateItem(itemObj, firebaseKey).then(() => {
        orderDetails(orderId);
      });
    }

    if (e.target.id.includes('create-order')) {
      const orderObj = {
        name: document.querySelector('#name').value,
        email: document.querySelector('#email').value,
        phone: document.querySelector('#phone').value,
        type: document.querySelector('#orderType').value,
        status: 'open',
        uid
      };
      createOrder(orderObj, uid).then((orderArray) => {
        showOrders(orderArray);
      });
    }

    if (e.target.id.includes('edit-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      const orderObj = {
        name: document.querySelector('#name').value,
        email: document.querySelector('#email').value,
        phone: document.querySelector('#phone').value,
        type: document.querySelector('#orderType').value,
        uid,
        firebaseKey
      };
      editOrder(orderObj, uid).then(() => {
        getOrders(uid).then((orderArray) => showOrders(orderArray));
      });
    }

    if (e.target.id.includes('submitBtn')) {
      const revenueObj = {
        payment_type: document.querySelector('#the-id-for-payment-type').value,
        tip: document.querySelector('#id-for-tip-amount').value,
        date: new Date().toLocaleString(),
        order_type: document.querySelector('#placeholder'),
        total: document.querySelector('#placeholder'),
        uid
      };
      console.warn(revenueObj);
    }
  });
};
export default formEvents;
