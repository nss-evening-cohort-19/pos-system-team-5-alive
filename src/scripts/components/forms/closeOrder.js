const closeOrder = () => {

  content += `<form id="paymentForm">
  <div class="mb-3">
    <label for="payment-type" class="form-label">Payment Type</label>
  <select class="form-select" aria-label="Default select example">
    <option selected>Open this select menu</option>
    <option value="1">Cash</option>
    <option value="2">Card</option>
    <option value="3">Mobile</option>
  </select>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Tip Amount</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>`;
};
