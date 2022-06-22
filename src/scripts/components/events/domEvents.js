import { getSingleItem, deleteItem } from '../../../api/itemData';
import { deleteOrder, getOrders, getSingleOrder } from '../../../api/orderData';
import addOrderForm from '../forms/createOrder';
import closeOrder from '../forms/closeOrder';
import addItem from '../forms/createItem';
import orderDetails from '../pages/orderDetails';
import { showOrders } from '../pages/viewOrders';
// import { getRevenue } from '../../../api/revenueData';
import revenue from '../pages/revenue';

const domEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('editItem')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleItem(firebaseKey).then((itemObj) => {
        addItem(itemObj);
      });
    }
    if (e.target.id.includes('deleteItem')) {
      const [, firebaseKey, orderId] = e.target.id.split('--');
      deleteItem(firebaseKey, orderId).then(() => {
        orderDetails(orderId);
      });
    }
    // if (e.target.id.includes('delete-order')) {
    //   // eslint-disable-next-line no-alert
    //   if (window.confirm('Want to delete?')) {
    //     const [, firebaseKey] = e.target.id.split('--');
    //     deleteOrder(firebaseKey).then((orderArray) => showOrders(orderArray));
    //   }
    // }
    if (e.target.id.includes('delete-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      deleteOrder(firebaseKey).then(() => {
        getOrders(uid).then((orderArray) => {
          showOrders(orderArray);
        });
      });
    }
    if (e.target.id.includes('viewOrders')) {
      getOrders(uid).then((orderArray) => {
        showOrders(orderArray);
      });
    }
    if (e.target.id.includes('createOrder')) {
      addOrderForm(uid);
    }
    if (e.target.id.includes('edit-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleOrder(firebaseKey).then((orderObj) => addOrderForm(orderObj));
    }
    if (e.target.id.includes('addItemBtn')) {
      const [, orderId] = e.target.id.split('--');
      addItem({}, orderId);
    }
    if (e.target.id.includes('paymentBtn')) {
      const [, orderId, total] = e.target.id.split('--');
      closeOrder(orderId, total);
    }
    if (e.target.id.includes('view-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleOrder(firebaseKey).then((orderObj) => orderDetails(orderObj.firebaseKey));
    }
    // REVENUE BTN CLICKED
    // if (e.target.id.includes('view-revenue-dom-btn')) {
    //   getRevenue().then((revenueArray) => {
    //     // const findOrderType = revenueArray.filter((item) => item.order_type.toLowerCase);
    //     // const findPaymentType = revenueArray.filter((item) => item.payment_type.toLowerCase);
    //     // const findTipAmount = revenueArray.filter((item) => Number(item.tip));
    //     // const tipSum = findTipAmount.reduce((a, b) => a + b.tip, 0);
    //     // document.querySelector('totalTips').innerHTML = tipSum.toFixed(2);
    //     // const findTotalAmount = revenueArray.filter((item) => Number(item.total));
    //     // const totalSum = findTotalAmount.reduce((a, b) => a + b.total, 0);
    //     // document.querySelector('#totalRevenue').innerHTML = totalSum.toFixed(2);
    //     revenue(uid);
    //   });
    //   // getRevenue().then((revenueArray) => revenue(revenueArray));
    // }
  });

  document.querySelector('#view-orders-dom-btn').addEventListener('click', () => {
    console.warn('cliked view order btn');
    getOrders(uid).then((orderArray) => showOrders(orderArray));
  });

  document.querySelector('#create-order-dom-btn').addEventListener('click', () => {
    addOrderForm({}, uid);
  });

  document.querySelector('#view-revenue-dom-btn').addEventListener('click', () => {
    revenue();
  });
};

export default domEvents;
