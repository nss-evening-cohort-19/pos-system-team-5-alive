import renderToDom from '../helpers/renderToDom';

const navBar = () => {
  const domString = `
  <nav class="navbar navbar-expand-lg bg-light">
  <div class="container">
    <a class="navbar-brand" href="#">
      <img src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24">
    </a>
  </div>
</nav>`;
  renderToDom('#nav-bar', domString);
};

export default navBar;
