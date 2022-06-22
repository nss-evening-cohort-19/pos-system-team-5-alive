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
        <p id='totalCallIn'>Total Call In Orders: ${item.orderType === 'Phone' ? 1 : 0}</p>
        <p id='totalWalkIn'>Total Walk In Orders: ${item.orderType === 'In Person' ? 1 : 0}</p>
        <ul>Payment Types:
          <li id='totalUsedCash'>Cash: ${item.payment === 'cash' ? 1 : 0}</li>
          <li id='totalUsedCard'>Credit Card: ${item.payment === 'card' ? 1 : 0}</li>
          <li id='totalUsedMobile'>Mobile: ${item.payment === 'mobile' ? 1 : 0}</li>
        </ul>
      </div>`;
    });
    renderToDom('#revenue', domString);
  } else {
    noRevenue();
  }
};

export default revenue;
