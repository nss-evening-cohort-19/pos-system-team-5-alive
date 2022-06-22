import { getRevenue } from '../../../api/revenueData';
import clearDom from '../../helpers/clearDom';
import renderToDom from '../../helpers/renderToDom';

const revenue = () => {
  clearDom();

  let domString = '';
  getRevenue().then((revenueArray) => {
    if (revenueArray.length) {
      revenueArray.forEach((item) => {
        domString += `<div id='revenuePage'>
        <h1>REVENUE</h1>
        <h4 id='dateRange'>Date Range: ${item.date}</h4>
        <h2 id='totalRevenue'>Total Revenue: $${item.total}</h2>
        <p id='totalTips'>Total Tips: $${item.tip}</p>
        <p id='totalCallIn'>Total Call In Orders: 0</p>
        <p id='totalWalkIn'>Total Walk In Orders: 0</p>
        <ul>Orders Status Summary:
          <li id='totalOpen'>Open: 0</li>
          <li id='totalClosed'>Closed: 0</li>
        </ul>
        <ul>Payment Types:
          <li id='totalUsedCash'>Cash: 0</li>
          <li id='totalUsedCard'>Credit Card: 0</li>
          <li id='totalUsedMobile'>Mobile: 0</li>
        </ul>
      </div>`;
        renderToDom('#revenue', domString);
      });
    } else {
      domString = '<h2>No Revenue to Display</h2>';
      renderToDom('#revenue', domString);
    }
  });
};

export default revenue;
