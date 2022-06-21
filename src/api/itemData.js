import axios from 'axios';

const dbUrl = 'https://team5-hiphop-pos-default-rtdb.firebaseio.com/';

const getOrderItems = (orderId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/items.json?orderBy="orderId"&equalTo="${orderId}"`)
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

const createItem = (itemObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/items.json`, itemObj)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/items/${response.data.name}.json`, payload)
        .then(() => {
          getOrderItems(itemObj.orderId).then(resolve);
        });
    }).catch(reject);
});

export {
  getOrderItems,
  getSingleItem,
  deleteItem,
  createItem
};
