import PropTypes from "prop-types";

const CartItem = ({ item, onUpdateCart, onDelete }) => {
  return (
    <div className="container-cart-item">
      <h3>{item.name}</h3>
      <p>${item.price}</p>
      <div className="cart-buttons">
        <input
          min={1}
          max={99}
          type="number"
          value={item.quantity}
          onChange={(e) => onUpdateCart(item, parseInt(e.target.value))}
        />
        <button
          className="btn-remove-from-cart"
          onClick={() => onDelete(item.id)}
        >
          Remover
        </button>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.object,
  onUpdateCart: PropTypes.func,
  onDelete: PropTypes.func,
};

export default CartItem;
