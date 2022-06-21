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

  document.querySelector('#view-orders-dom-btn').addEventListener('click', () => {
    console.warn('cliked view order btn');
  });

  document.querySelector('#create-order-dom-btn').addEventListener('click', () => {
    console.warn('clicked create order btn');
  });

  document.querySelector('#view-revenue-dom-btn').addEventListener('click', () => {
    console.warn('clicked view revenue btn');
  });
};

export default domEvents;
