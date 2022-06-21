import { getOrders } from '../../../api/orderData';
import signOut from '../../helpers/signOut';
import addOrderForm from '../forms/createOrder';
import { showOrders } from '../pages/viewOrders';

const navEvents = (uid) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-btn').addEventListener('click', signOut);

  // LOGO CLICK RENDERS HOME SCREEN
  document.querySelector('#home').addEventListener('click', () => {
    console.warn('Will render home screen once logo is clicked');
  });

  // VIEW ORDER CARDS
  document.querySelector('#viewOrders').addEventListener('click', () => {
    getOrders(uid).then((orderArray) => showOrders(orderArray));
  });

  // CREATE A NEW ORDER FORM
  document.querySelector('#createOrder').addEventListener('click', () => {
    addOrderForm(uid);
  });
};

export default navEvents;
