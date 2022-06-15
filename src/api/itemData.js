import axios from 'axios';

const dbUrl = 'https://team5-hiphop-pos-default-rtdb.firebaseio.com/';

const getOrderItems = (orderId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/items.json?orderBy="order_id"&equalTo="${orderId}"`)
    .then((itemsArr) => {
      if (itemsArr.data) {
        resolve(Object.values(itemsArr.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

// eslint-disable-next-line import/prefer-default-export
export { getOrderItems };
