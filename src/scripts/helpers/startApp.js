import domBuilder from '../components/domBuilder';
import navEvents from '../components/events/navEvents';
import navBar from '../components/navBar';

const startApp = (user) => {
  domBuilder();
  navBar();
  navEvents(user.uid);
};

export default startApp;
