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
        <input type="email" class="form-control" id="email" placeholder="Customer Email" value="${obj.email || ''}" required>
      </div>
      <div class="form-group">
        <label for="number">Customer Phone Number</label>
        <input type="text" class="form-control" id="phone" placeholder="Customer Phone Number" value="${obj.phone || ''}" required>
      </div>
      <div class="form-floating">
        <select class="form-select" id="orderType" required>
        <option value="" selected>Select an order type</option>
        <option value="Phone" ${obj.type === 'Phone' ? 'selected' : ''}>Phone</option>
        <option value="In Person" ${obj.type === 'In Person' ? 'selected' : ''}>In Person</option>
        </select>
        <label for="floatingSelect">Select an order type</label>
      </div>
      <div class="form-group" id="select-order">
      </div>
      <div id="status" value="${obj.status || ''}"></div>
      <button type="submit" class="btn btn-primary">Create Order
      </button>
    </form>`;
  renderToDom('#form-container', domString);
};
export default addOrderForm;
