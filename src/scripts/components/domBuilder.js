import renderToDom from '../helpers/renderToDom';

const domBuilder = () => {
  const content = `
  <div id="nav-bar"></div>
  <div id="main-container">
  <div id="main-header"></div>
  <div id="order-div"></div>
  <div id="form-container"></div>
  <div id="revenue"></div>
  </div>
  <div id="footer"></div>`;
  renderToDom('#app', content);
};
export default domBuilder;
