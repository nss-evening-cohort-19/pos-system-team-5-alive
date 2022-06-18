import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// Get Order
const getOrders = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/orders.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});

// Create Order
const createOrder = (orderObj, uid) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/orders.json`, orderObj)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/orders/${response.data.name}.json`, payload)
        .then(() => {
          getOrders(uid).then((orderArray) => resolve(orderArray));
        });
    }).catch((error) => reject(error));
});

// Edit Order
const editOrder = (orderObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/orders/${orderObj.firebaseKey}.json`, orderObj)
    .then(() => getOrders().then(resolve))
    .catch(reject);
});

// Get Single Order
const getSingleOrder = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/orders/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

// Delete Order
const deleteOrder = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/orders/${firebaseKey}.json`)
    .then(() => {
      getOrders(uid).then((orderArray) => resolve(orderArray));
    })
    .catch((error) => reject(error));
});

export {
  getOrders,
  createOrder,
  editOrder,
  deleteOrder,
  getSingleOrder
};
