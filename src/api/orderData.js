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
const createOrder = (orderObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/orders.json`, orderObj)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/orders/${response.data.name}.json`, payload)
        .then(() => {
          getOrders().then(resolve);
        });
    })
    .catch((error) => reject(error));
});

// Edit Order
const editOrder = (orderObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/orders/${orderObj.firebaseKey}.json`)
    .then(() => getOrders().then(resolve))
    .catch(reject);
});
