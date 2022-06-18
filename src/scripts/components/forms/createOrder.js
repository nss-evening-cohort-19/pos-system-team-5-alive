import clearDom from '../../helpers/clearDom';
import renderToDom from '../../helpers/renderToDom';

const addOrderForm = (obj = {}) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `edit-order--${obj.firebaseKey}` : 'create-order'}" class="mb-4">
      <div class="form-group">
        <label for="name">Order Name</label>
        <input type="text" class="form-control" id="name" aria-describedby="orderName" placeholder="Enter Name of Order" value="${obj.name || ''}" required>
      </div>
      <div class="form-group">
        <label for="email">Customer Email</label>
        <input type="email" class="form-control" id="email" placeholder="Customer Email" value="${obj.email || ''}"
      </div>
      <div class="form-floating">
        <select class="form-select" id="orderType">
        <option selected>Order Type</option>
        <option value="Phone">Phone</option>
        <option value="Email">Email</option>
        </select>
      </div>
      <div class="form-group" id="select-order">
      </div>
      <button type="submit" class="btn btn-primary">Submit Order
      </button>
    </form>`;
  renderToDom('#form-container', domString);
};
export default addOrderForm;
