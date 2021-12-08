import PropTypes from 'prop-types';

const Notification = ({ notificationMessage }) => <p>{notificationMessage}</p>;

Notification.propTypes = {
  notificationMessage: PropTypes.string.isRequired,
};

export default Notification;
