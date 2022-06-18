import hhpwLogo from './image/hhpw-record.png';
import renderToDom from '../helpers/renderToDom';

const navBar = () => {
  const domString = `
  <nav class="navbar navbar-expand-lg" style="background-color:#F8F7F2;">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src=${hhpwLogo} alt="" width="65" height="65">
      HHP+W
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link" aria-current="page">View Orders</a>
        <a class="nav-link" id="create--order">Create an Order</a>
      </div>
    </div>
  <div id="logout-btn"></div>
  </div>  
</nav>`;
  renderToDom('#nav-bar', domString);
};

export default navBar;
