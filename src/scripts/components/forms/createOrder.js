import clearDom from '../../helpers/clearDom';
import renderToDom from '../../helpers/renderToDom';

const addOrderForm = (obj = {}) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-book--${obj.firebaseKey}` : 'submit-order'}">
  <div class="mb-3">
    <label for="orderName" class="form-label">Order Name</label>
    <input type="text" class="form-control" id="orderName" aria-describedby="nameHelp">
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>`;
  renderToDom('#form-container', domString);
};
