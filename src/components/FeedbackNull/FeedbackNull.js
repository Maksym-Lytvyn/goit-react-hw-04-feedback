import PropTypes from 'prop-types';

const FeedbackNull = ({ message }) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};
export default FeedbackNull;
FeedbackNull.propTypes = {
  message: PropTypes.string.isRequired,
};
