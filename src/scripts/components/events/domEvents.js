import { getSingleItem, deleteItem } from '../../../api/itemData';
import { deleteOrder, getOrders, getSingleOrder } from '../../../api/orderData';
import addOrderForm from '../forms/createOrder';
import closeOrder from '../forms/closeOrder';
import addItem from '../forms/createItem';
import orderDetails from '../pages/orderDetails';
import { showOrders } from '../pages/viewOrders';

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
    // if (e.target.id.includes('delete-order')) {
    //   // eslint-disable-next-line no-alert
    //   if (window.confirm('Want to delete?')) {
    //     const [, firebaseKey] = e.target.id.split('--');
    //     deleteOrder(firebaseKey).then((orderArray) => showOrders(orderArray));
    //   }
    // }
    if (e.target.id.includes('delete-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      deleteOrder(firebaseKey).then(() => {
        getOrders(uid).then((orderArray) => {
          showOrders(orderArray);
        });
      });
    }
    if (e.target.id.includes('viewOrders')) {
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
    }
    if (e.target.id.includes('view-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleOrder(firebaseKey).then((orderObj) => orderDetails((orderObj)));
    }
  });
};

export default domEvents;
