import clearDom from '../../helpers/clearDom';
import renderToDom from '../../helpers/renderToDom';

const noRevenue = () => {
  const domString = '<h2>No Revenue to Display</h2>';
  renderToDom('#revenue', domString);
};

const revenue = (array) => {
  clearDom();
  let sumRevenue = 0;
  let sumTips = 0;
  let sumCash = 0;
  let sumCard = 0;
  let sumMobile = 0;
  let sumPhoneOrder = 0;
  let sumInPersonOrder = 0;
  if (array.length) {
    array.forEach((item) => {
      sumRevenue += Number(item.total);
      sumTips += Number(item.tip);
      if (item.payment === 'cash') {
        sumCash += 1;
      } else if (item.payment === 'card') {
        sumCard += 1;
      } else if (item.payment === 'mobile') {
        sumMobile += 1;
      }
      if (item.orderType === 'Phone') {
        sumPhoneOrder += 1;
      } else if (item.orderType === 'In Person') {
        sumInPersonOrder += 1;
      }
    });
  } else {
    noRevenue();
  }

  const domString = `<div id='revenuePage'>
    <h1>REVENUE</h1>
    <h4 id='dateRange'>Date Range:</h4>
    <h2 id='totalRevenue'>Total Revenue: $${sumRevenue.toFixed(2)}</h2>
    <p id='totalTips'>Total Tips: $${sumTips.toFixed(2)}</p>
    <p id='totalCallIn'>Total Call In Orders: ${sumPhoneOrder}</p>
    <p id='totalWalkIn'>Total Walk In Orders: ${sumInPersonOrder}</p>
    <ul>Payment Types:
      <li id='totalUsedCash'>Cash: ${sumCash}</li>
      <li id='totalUsedCard'>Credit Card: ${sumCard}</li>
      <li id='totalUsedMobile'>Mobile: ${sumMobile}</li>
    </ul>
  </div>`;
  renderToDom('#revenue', domString);
};

export default revenue;
