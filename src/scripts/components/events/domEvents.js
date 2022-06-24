import { getSingleItem, deleteItem } from '../../../api/itemData';
import { getOrders, getSingleOrder } from '../../../api/orderData';
import deleteOrderItems from '../../../api/mergedData';
import addOrderForm from '../forms/createOrder';
import closeOrder from '../forms/closeOrder';
import addItem from '../forms/createItem';
import orderDetails from '../pages/orderDetails';
import { showOrders } from '../pages/viewOrders';
import { getRevenue } from '../../../api/revenueData';
import revenue from '../pages/revenue';
import { cancelEvent } from './formEvents';

const domEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('editItem')) {
      const [, firebaseKey, orderId] = e.target.id.split('--');
      getSingleItem(firebaseKey).then((itemObj) => {
        addItem(itemObj, orderId);
      });
    }
    if (e.target.id.includes('deleteItem')) {
      const [, firebaseKey, orderId] = e.target.id.split('--');
      deleteItem(firebaseKey, orderId).then(() => {
        orderDetails(orderId);
      });
    }
    if (e.target.id.includes('delete-order')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete? All items will be deleted')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteOrderItems(firebaseKey, uid).then((ordersArr) => {
          showOrders(ordersArr);
        });
      }
    }

    if (e.target.id.includes('order-details')) {
      getOrders(uid).then((orderArray) => {
        showOrders(orderArray);
      });
    }
    if (e.target.id.includes('createOrder')) {
      addOrderForm(uid);
    }
    if (e.target.id.includes('edit-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleOrder(firebaseKey).then((orderObj) => addOrderForm(orderObj));
    }
    if (e.target.id.includes('addItemBtn')) {
      const [, orderId] = e.target.id.split('--');
      addItem({}, orderId);
    }
    if (e.target.id.includes('paymentBtn')) {
      const [, orderId, total] = e.target.id.split('--');
      closeOrder(orderId, total);
      cancelEvent();
    }
    if (e.target.id.includes('order-details')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleOrder(firebaseKey).then((orderObj) => orderDetails(orderObj.firebaseKey));
    }
  });

  document.querySelector('#view-orders-dom-btn').addEventListener('click', () => {
    console.warn('cliked view order btn');
    getOrders(uid).then((orderArray) => showOrders(orderArray));
  });

  document.querySelector('#create-order-dom-btn').addEventListener('click', () => {
    addOrderForm({}, uid);
  });

  // REVENUE BTN CLICKED ON HOME SCREEN
  document.querySelector('#view-revenue-dom-btn').addEventListener('click', () => {
    getRevenue(uid).then((revenueArray) => revenue(revenueArray));
  });
};

export default domEvents;
