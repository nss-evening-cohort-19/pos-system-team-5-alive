import axios from 'axios';
import firebaseConfig from './apiKeys';
import { getOrderItems } from './itemData';

const dbUrl = firebaseConfig.databaseURL;

// GET REVENUE PAGE
const getRevenue = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/revenues.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

// GET TOTAL OF ORDER BEFORE TIP
const orderItemsSum = (uid, orderId) => new Promise((resolve, reject) => {
  getOrderItems(orderId).then((orderItemsArray) => {
    const findPrice = orderItemsArray.filter((item) => Number(item.price));
    const totalPreTip = findPrice.reduce((a, b) => a + b.price, 0);

    Promise.all(totalPreTip).then(() => {
      getRevenue(uid).then(resolve);
    });
  }).catch(reject);
});

// POST NEW REVENUE PAGE
const postRevenue = (newRevenueObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/revenues.json`, newRevenueObj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/cards/${response.data.name}.json`, body)
        .then(() => {
          getRevenue(newRevenueObj.uid).then(resolve);
        });
    })
    .catch(reject);
});

export {
  getRevenue,
  orderItemsSum,
  postRevenue
};
