import { getSingleItem, deleteItem } from '../../../api/itemData';
import { getOrders } from '../../../api/orderData';
import addOrderForm from '../forms/createOrder';
import orderDetails from '../pages/orderDetails';
import showOrders from '../pages/viewOrders';

const domEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('editItem')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleItem(firebaseKey).then((itemObj) => {
        console.warn(itemObj);
      });
    }
    if (e.target.id.includes('deleteItem')) {
      const [, firebaseKey, orderId] = e.target.id.split('--');
      deleteItem(firebaseKey, orderId).then((itemsArr) => {
        orderDetails(itemsArr);
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
  });
};

export default domEvents;
