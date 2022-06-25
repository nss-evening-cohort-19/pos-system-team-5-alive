import { formEvents } from '../components/events/formEvents';
import domEvents from '../components/events/domEvents';
import domBuilder from '../components/domBuilder';
import navEvents from '../components/events/navEvents';
import logoutButton from '../components/logoutButton';
import navBar from '../components/navBar';
import homeButtons from '../components/pages/homeScreen';
import searchFunction from './searchFunction';

const startApp = (user) => {
  domBuilder();
  navBar();
  homeButtons(user);
  logoutButton();
  navEvents(user);
  formEvents(user.uid);
  domEvents(user.uid);
  searchFunction(user.uid);
};

export default startApp;
