import clearDom from '../../helpers/clearDom';
import renderToDom from '../../helpers/renderToDom';

const closeOrder = (orderId, total) => {
  clearDom();
  const orderTotal = `<h1>Order Total: $${total}</h1>`;
  const content = `<form id="submitPayment--${orderId}--${total}">
      <div class="mb-3">
        <label for="payment-type" class="form-label">Payment Type</label>
        <select id="payType" class="form-select" aria-label="Default select example" required>
        <option selected>Open this select menu</option>
          <option value="cash">Cash</option>
          <option value="card">Card</option>
          <option value="mobile">Mobile</option>
        </select>
      </div>
    <div class="mb-3">
      <label for="tipAmount" class="form-label">Tip Amount</label>
      <input type="text" class="form-control" id="tipAmount" required>
    </div>
      <button id="submitBtn" type="submit" class="btn btn-success">Close Order</button>
    <div id="cancel-div">
      <button id="cancelBtn--${orderId}" type="submit" class="btn btn-primary">Go Back</button>
    </div>
    </form>`;
  renderToDom('#main-header', orderTotal);
  renderToDom('#form-container', content);
};

export default closeOrder;
