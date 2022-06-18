import { createItem } from '../../../api/itemData';
import orderDetails from '../pages/orderDetails';

const formEvents = () => {
  console.warn('formEvents');
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
  });
};

export default formEvents;
