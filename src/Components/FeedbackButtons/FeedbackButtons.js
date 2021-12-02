import PropTypes from 'prop-types';

const FeedbackButtons = ({ feedbacks, submitFeedback }) => (
  <div className="">
    {feedbacks.map(feedback => (
      <button
        className=""
        type="button"
        key={feedback}
        onClick={() => submitFeedback(feedback)}
      >
        {feedback}
      </button>
    ))}
  </div>
);

FeedbackButtons.propTypes = {
  feedbacks: PropTypes.array.isRequired,
  submitFeedback: PropTypes.func.isRequired,
};

export default FeedbackButtons;
