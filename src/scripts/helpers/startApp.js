import domBuilder from '../components/domBuilder';
import navEvents from '../components/events/navEvents';
import logoutButton from '../components/logoutButton';
import navBar from '../components/navBar';

const startApp = (user) => {
  domBuilder();
  navBar();
  logoutButton();
  navEvents(user.uid);
};

export default startApp;
