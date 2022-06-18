import renderToDom from '../../helpers/renderToDom';

const closeOrder = (orderId, total) => {
  const orderTotal = `<h1>Order Total: $${total}</h1>`;
  const content = `<form id="submitPayment--${orderId}">
      <div class="mb-3">
        <label for="payment-type" class="form-label">Payment Type</label>
        <select class="form-select" aria-label="Default select example">
          <option value="1">Cash</option>
          <option selected>Open this select menu</option>
          <option value="3">Mobile</option>
          <option value="2">Card</option>
        </select>
      </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Tip Amount</label>
      <input type="password" class="form-control" id="exampleInputPassword1">
    </div> 
      <button id="submitBtn" type="submit" class="btn btn-success">Close Order</button>
      <button id="cancelBtn--${orderId} "type="cancel" class="btn btn-primary">Go Back</button>
    </form>`;
  renderToDom('#main-header', orderTotal);
  renderToDom('#form-container', content);
};

export default closeOrder;
