import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GET REVENUE PAGE
const getRevenue = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/revenues.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

// POST NEW REVENUE PAGE
const postRevenue = (newRevenueObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/revenues.json`, newRevenueObj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/revenues/${response.data.name}.json`, body)
        .then(() => {
          getRevenue(newRevenueObj.uid).then(resolve);
        });
    })
    .catch(reject);
});

export {
  getRevenue,
  postRevenue
};
