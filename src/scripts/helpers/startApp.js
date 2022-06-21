import formEvents from '../components/events/formEvents';
import domBuilder from '../components/domBuilder';
import domEvents from '../components/events/domEvents';
import navEvents from '../components/events/navEvents';
import logoutButton from '../components/logoutButton';
import navBar from '../components/navBar';
import homeButtons from '../components/pages/homeScreen';

const startApp = (user) => {
  domBuilder();
  navBar();
  homeButtons(user.uid);
  logoutButton();
  navEvents(user.uid);
  formEvents(user.uid);
  domEvents(user.uid);
};

export default startApp;
