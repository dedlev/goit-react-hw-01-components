import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ stats }) => {
  const title = stats.title;
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.stat_list}>
        {stats.map(({ id, label, percentage }) => (
          <li
            className={css.item}
            key={id}
            style={{ backgroundColor: generateRandomColor() }}
          >
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

function generateRandomColor() {
  const minBrightness = 150;
  const red = Math.floor(Math.random() * (255 - minBrightness) + minBrightness);
  const green = Math.floor(
    Math.random() * (255 - minBrightness) + minBrightness
  );
  const blue = Math.floor(
    Math.random() * (255 - minBrightness) + minBrightness
  );
  return `rgb(${red}, ${green}, ${blue})`;
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
