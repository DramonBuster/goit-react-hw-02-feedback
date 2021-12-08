import PropTypes from 'prop-types';

const Section = ({ title, children }) => (
  <section>
    <div>{title}</div>
    <div>{children}</div>
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
