import { getSingleItem, deleteItem } from '../../../api/itemData';
import closeOrder from '../forms/closeOrder';
import addItem from '../forms/createItem';
import orderDetails from '../pages/orderDetails';

const domEvents = () => {
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
    if (e.target.id.includes('addItemBtn')) {
      const [, orderId] = e.target.id.split('--');
      addItem({}, orderId);
    }
    if (e.target.id.includes('paymentBtn')) {
      const [, orderId, total] = e.target.id.split('--');
      closeOrder(orderId, total);
    }
  });
  document.querySelector('#main-header').addEventListener('click', (e) => {
    if (e.target.id.includes('#view-orders-dom-btn')) {
      console.warn('VIEW ORDERS button clicked');
    }
    if (e.target.id.includes('#create-order-dom-btn')) {
      console.warn('CREATE ORDER button clicked');
    }
    if (e.target.id.includes('#view-revenue-dom-btn')) {
      console.warn('VIEW REVENUE button clicked');
    }
  });
};

export default domEvents;
