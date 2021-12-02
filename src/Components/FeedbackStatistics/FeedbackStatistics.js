import PropTypes from 'prop-types';

const FeedbackStatistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <div>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
      </div>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage} %</p>
    </div>
  );
};

FeedbackStatistics.defaultProps = {
  total: 0,
  positivePercentage: 0,
};

FeedbackStatistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default FeedbackStatistics;
