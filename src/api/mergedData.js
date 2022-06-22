import { getOrderItems, deleteItem } from './itemData';
import { deleteOrder } from './orderData';

const deleteOrderItems = (orderId, uid) => new Promise((resolve, reject) => {
  getOrderItems(orderId).then((itemsArr) => {
    const deleteItems = itemsArr.map((item) => deleteItem(item.firebaseKey, item.orderId));
    Promise.all(deleteItems).then(() => {
      deleteOrder(orderId, uid).then((orderArr) => {
        resolve(orderArr);
      });
    }).catch(reject);
  });
});

export default deleteOrderItems;
