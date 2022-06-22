import { createOrder, editOrder, getOrders } from '../../../api/orderData';
import { showOrders } from '../pages/viewOrders';
import { createItem, updateItem } from '../../../api/itemData';
import orderDetails from '../pages/orderDetails';
import revenue from '../pages/revenue';
import { getRevenue, postRevenue } from '../../../api/revenueData';

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

    if (e.target.id.includes('submitPayment')) {
      const [, orderId, total] = e.target.id.split('--');
      const revenueObj = {
        payment: document.querySelector('#payType').value,
        tip: Number(document.querySelector('#tipAmount').value).toFixed(2),
        date: new Date().toLocaleString(),
        status: 'closed',
        total: (Number(total) + Number(document.querySelector('#tipAmount').value)).toFixed(2),
        orderType: 'Phone',
        orderId,
        uid
      };
      postRevenue(revenueObj, uid).then(() => getRevenue(uid)).then((revenueArray) => revenue(revenueArray));
    }
  });
};
export default formEvents;
