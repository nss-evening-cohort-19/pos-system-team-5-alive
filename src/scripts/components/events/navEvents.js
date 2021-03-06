import { getOrders } from '../../../api/orderData';
import signOut from '../../helpers/signOut';
import homeButtons from '../pages/homeScreen';
import addOrderForm from '../forms/createOrder';
import { showOrders } from '../pages/viewOrders';
import clearDom from '../../helpers/clearDom';
import domEvents from './domEvents';
import { closedOrders } from '../pages/closedOrderCards';

const navEvents = (user) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-btn').addEventListener('click', signOut);

  // LOGO CLICK RENDERS HOME SCREEN
  document.querySelector('#home').addEventListener('click', () => {
    clearDom();
    homeButtons(user);
    domEvents(user.uid);
  });

  // VIEW OPEN ORDER CARDS
  document.querySelector('#viewOrders').addEventListener('click', () => {
    getOrders(user.uid).then((orderArray) => showOrders(orderArray));
  });

  // CREATE A NEW ORDER FORM
  document.querySelector('#createOrder').addEventListener('click', () => {
    addOrderForm(user.uid);
  });

  // VIEW CLOSED ORDER CARDS
  document.querySelector('#allClosedOrders').addEventListener('click', () => {
    getOrders(user.uid).then((closedOrderArray) => closedOrders(closedOrderArray));
  });
};

export default navEvents;
