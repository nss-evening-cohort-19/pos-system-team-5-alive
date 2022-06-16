import { getSingleItem, deleteItem } from '../../../api/itemData';
import orderDetails from '../pages/orderDetails';

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
  });
};

export default domEvents;
