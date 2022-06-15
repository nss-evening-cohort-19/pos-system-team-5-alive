import signOut from '../../helpers/signOut';

const navEvents = () => {
  document.querySelector('#logout-btn').addEventListener('click', signOut);
};

export default navEvents;
