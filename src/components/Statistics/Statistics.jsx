import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={css.statisticsSection}>
      <p className={css.statistics__item}>Good: {good}</p>
      <p className={css.statistics__item}>Neutral: {neutral}</p>
      <p className={css.statistics__item}>Bad: {bad}</p>
      <p className={css.statistics__item}>Total: {total}</p>
      <p className={css.statistics__item}>
        Positive Feedback: {positivePercentage}%
      </p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
