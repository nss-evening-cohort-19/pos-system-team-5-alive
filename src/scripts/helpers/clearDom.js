const clearDom = () => {
  document.querySelector('#order-div').innerHTML = '';
  document.querySelector('#main-header').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#revenue').innerHTML = '';
};

export default clearDom;
