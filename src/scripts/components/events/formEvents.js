import { createOrder, editOrder, getOrders } from '../../../api/orderData';
import showOrders from '../pages/viewOrders';

const formEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();

    if (e.target.id.includes('create-order')) {
      const orderObj = {
        name: document.querySelector('#name').value,
        // phone: document.querySelector('#phone').value,
        email: document.querySelector('#email').value,
        type: document.querySelector('#type').value,
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
        phone: document.querySelector('#phone').value,
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
};

export default formEvents;
