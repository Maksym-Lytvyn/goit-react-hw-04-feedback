import PropTypes from 'prop-types';

export const FeedbackNull = ({message}) => {
    return (
      <div>
        <p>{message}</p>
      </div>
    );
}
FeedbackNull.propTypes = {
  message: PropTypes.string.isRequired,
};
