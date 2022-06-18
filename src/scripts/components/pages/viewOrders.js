import renderToDom from '../../helpers/renderToDom';

const emptyOrders = () => {
  const domString = '<h1>No orders have been added</h1>';
  renderToDom('#cards', domString);
};
const showOrders = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add--btn">Create an Order</button>';

  renderToDom('#add-button', btnString);

  if (array.length) {
    let domString = '';
    array.forEach((obj) => {
      domString += `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h3 class="order-name">${obj.name}</h3>
          <p class="order-email"><b>Customer Email:</b> ${obj.email}</p>
          <p class="order-type"><b>Order Type:</b> ${obj.type}</p>
          <i class="fas fa-edit btn btn-info" id="edit-order--${obj.firebaseKey}"></i>
          <i class="btn btn-danger fas fa-trash-alt" id="delete-order-btn--${obj.firebaseKey}"></i>
        </div>
      </div>`;
    });
    renderToDom('#cards', domString);
  } else {
    emptyOrders();
  }
};

export default showOrders;
