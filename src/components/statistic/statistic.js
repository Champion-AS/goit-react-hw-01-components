import PropTypes from 'prop-types';
import css from './statistic.module.css';
import StatisticList from './/statisticList';

function Statistic({ title, stats }) {
    return (
      <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}

        <ul className={css.statList}>
          {stats.map(obj => (
            <StatisticList
              key={obj.id}
              label={obj.label}
              percentage={obj.percentage}
            />
          ))}
        </ul>
      </section>
    );
}

Statistic.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        })),
};


export default Statistic;

