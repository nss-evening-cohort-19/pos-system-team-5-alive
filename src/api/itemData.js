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

const getSingleItem = (itemFbKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/items/${itemFbKey}.json`)
    .then((itemObj) => resolve(itemObj))
    .catch((error) => reject(error));
});

const deleteItem = (itemFbKey, orderId) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/items/${itemFbKey}.json`)
    .then(() => {
      getOrderItems(orderId).then((itemsArr) => resolve(itemsArr));
    }).catch((error) => reject(error));
});

export { getOrderItems, getSingleItem, deleteItem };
