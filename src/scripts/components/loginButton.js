import signIn from '../helpers/signIn';
import hhpwLogo from './image/hhpw-record.png';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = `
  <div class="login">
    <img src=${hhpwLogo} alt="Hip Hop, Pizza and Wangs Logo">
    <button id="google-auth" class="btn btn-success">
      Let&#39s Get It Started Up In Here
    </button>
  </div>`;
  document.querySelector('#app').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;
