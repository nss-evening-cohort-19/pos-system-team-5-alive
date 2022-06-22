import clearDom from '../../helpers/clearDom';
import renderToDom from '../../helpers/renderToDom';

const revenue = () => {
  clearDom();

  const domString = `<div id='revenuePage'>
  <h1>REVENUE</h1>
  <h4 id='dateRange'>Date Range:</h4>
  <h2 id='totalRevenue'>Total Revenue: $0.00</h2>
  <p id='totalTips'>Total Tips: $0.00</p>
  <p id='totalCallIn'>Total Call In Orders: 0</p>
  <p id='totalWalkIn'>Total Walk In Orders: 0</p>
  <p>Orders Status Summary:</p>
  <ul>
    <li id='totalOpen'>Open: 0</li>
    <li id='totalClosed'>Closed: 0</li>
  </ul>
  <p>Payment Types:</p>
  <ul>
    <li id='totalUsedCash'>Cash: 0</li>
    <li id='totalUsedCard'>Credit Card: 0</li>
    <li id='totalUsedMobile'>Mobile: 0</li>
  </ul>
</div>`;
  renderToDom('#revenue', domString);
};

export default revenue;
