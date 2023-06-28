import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.FeedbackOptions}>
      {options.map(feedbackOption => (
        <button
          key={feedbackOption}
          className={`${css[`${feedbackOption}Btn`]}`}
          onClick={() => onLeaveFeedback(feedbackOption)}
        >
          {feedbackOption}
        </button>
      ))}
    </div>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
