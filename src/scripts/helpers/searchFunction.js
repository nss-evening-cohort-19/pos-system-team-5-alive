import { getOrders } from '../../api/orderData';
import { showOrders } from '../components/pages/viewOrders';

const searchFunction = (uid) => {
  document.querySelector('#main-header').addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
      const input = e.target.value.toLowerCase();
      getOrders(uid).then((orderArr) => {
        const renderArr = [];
        // eslint-disable-next-line no-restricted-syntax
        for (const order of orderArr) {
          if (order.name.toLowerCase().includes(input) || order.phone === (input)) {
            renderArr.push(order);
          }
          showOrders(renderArr);
        }
      });
    }
  });
};

export default searchFunction;
