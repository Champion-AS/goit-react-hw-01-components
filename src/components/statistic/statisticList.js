import PropTypes from 'prop-types';
import css from './statistic.module.css';

function StatisticList({ label, percentage }) {
    return (
      <li className={css.item} style={{ backgroundColor: randomClr() }}>
        <span >{label}</span>
        <span >{percentage}</span>
      </li>
    );
}

StatisticList.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}

function randomClr() {
  const letters = '0123456789ABCDEF'.split('');
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.round(Math.random() * 15)];
  }
  return color;
}

export default StatisticList;

