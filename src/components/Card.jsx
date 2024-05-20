import PropTypes from "prop-types";

const Card = ({ children, bg = "bg-gray-100", shadow = "shadow-md" }) => {
  return (
    <div
      className={`${bg} ${shadow} p-6 rounded-lg transition-shadow duration-300 hover:shadow-lg`}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  bg: PropTypes.string,
  shadow: PropTypes.string,
};

export default Card;
