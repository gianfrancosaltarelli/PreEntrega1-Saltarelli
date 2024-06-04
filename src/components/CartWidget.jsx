import { FaShoppingCart } from 'react-icons/fa';
import PropTypes from 'prop-types';

const CartWidget = ({ itemCount }) => {
  return (
    <div style={{ color: 'white', display: 'flex', alignItems: 'center' }}>
      <FaShoppingCart style={{ fontSize: '1.5rem' }} />
      <span style={{ marginLeft: '5px', fontWeight: 'bold' }}>{itemCount}</span>
    </div>
  );
};

CartWidget.propTypes = {
  itemCount: PropTypes.number,
};

CartWidget.defaultProps = {
  itemCount: 0,
};

export default CartWidget;