import { getSingleItem, deleteItem } from '../../../api/itemData';
import { getOrders } from '../../../api/orderData';
import addOrderForm from '../forms/createOrder';
import closeOrder from '../forms/closeOrder';
import addItem from '../forms/createItem';
import orderDetails from '../pages/orderDetails';
import showOrders from '../pages/viewOrders';

const domEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('editItem')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleItem(firebaseKey).then((itemObj) => {
        addItem(itemObj);
      });
    }
    if (e.target.id.includes('deleteItem')) {
      const [, firebaseKey, orderId] = e.target.id.split('--');
      deleteItem(firebaseKey, orderId).then(() => {
        orderDetails(orderId);
      });
    }
    if (e.target.id.includes('viewOrders')) {
      getOrders(uid).then((orderArray) => {
        showOrders(orderArray);
      });
    }
    if (e.target.id.includes('createOrder')) {
      addOrderForm();
    }
    if (e.target.target.id.includes('addItemBtn')) {
      const [, orderId] = e.target.id.split('--');
      addItem({}, orderId);
    }
    if (e.target.id.includes('paymentBtn')) {
      const [, orderId, total] = e.target.id.split('--');
      closeOrder(orderId, total);
    }
  });
};

export default domEvents;
