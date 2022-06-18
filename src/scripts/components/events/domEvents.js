import { getSingleItem, deleteItem } from '../../../api/itemData';
import { deleteOrder } from '../../../api/orderData';
import orderDetails from '../pages/orderDetails';
import showOrders from '../pages/viewOrders';

const domEvents = () => {
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
    if (e.target.id.includes('delete-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      deleteOrder(firebaseKey).then((orderArray) => {
        showOrders(orderArray);
      });
    }
  });
};

export default domEvents;
