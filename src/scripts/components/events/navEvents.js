import signOut from '../../helpers/signOut';
import homeButtons from '../pages/homeScreen';

const navEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-btn').addEventListener('click', signOut);

  // LOGO CLICK RENDERS HOME SCREEN
  document.querySelector('#home').addEventListener('click', (user) => {
    homeButtons(user);
  });

  // VIEW ORDER CARDS
  document.querySelector('#viewOrders').addEventListener('click', () => {
    console.warn('Will render user&#39s order cards');
  });

  // CREATE A NEW ORDER FORM
  document.querySelector('#createOrder').addEventListener('click', () => {
    console.warn('Will render new order form');
  });
};

export default navEvents;
