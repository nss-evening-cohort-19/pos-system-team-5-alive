import clearDom from '../../helpers/clearDom';
import renderToDom from '../../helpers/renderToDom';

const noRevenue = () => {
  const domString = '<h2>No Revenue to Display</h2>';
  renderToDom('#revenue', domString);
};

const revenue = (array) => {
  clearDom();

  if (array.length) {
    let domString = '';
    array.forEach((item) => {
      domString += `<div id='revenuePage'>
        <h1>REVENUE</h1>
        <h4 id='dateRange'>Date Range: ${item.date}</h4>
        <h2 id='totalRevenue'>Total Revenue: $${Number(0 + item.total).toFixed(2)}</h2>
        <p id='totalTips'>Total Tips: $${Number(0 + item.tip).toFixed(2)}</p>
        <p id='totalCallIn'>Total Call In Orders: 0</p>
        <p id='totalWalkIn'>Total Walk In Orders: 0</p>
        <ul>Orders Status Summary:
          <li id='totalOpen'>Open: ${item.orderType === 'open'}</li>
          <li id='totalClosed'>Closed: ${item.orderType === 'closed'}</li>
        </ul>
        <ul>Payment Types:
          <li id='totalUsedCash'>Cash: ${item.payment === 'cash'}</li>
          <li id='totalUsedCard'>Credit Card: ${item.payment === 'card'}</li>
          <li id='totalUsedMobile'>Mobile: ${item.payment === 'mobile'}</li>
        </ul>
      </div>`;
    });
    renderToDom('#revenue', domString);
  } else {
    noRevenue();
  }
};

export default revenue;
