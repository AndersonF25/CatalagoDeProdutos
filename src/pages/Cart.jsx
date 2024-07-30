import {} from "react";
import PropTypes from "prop-types";
import CartItem from "../components/CartItem";
import CheckoutButton from "../components/CheckoutButton";

const Cart = ({ cartItems, onDelete, onUpdateCart, onCheckout, setCart }) => {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container-cart">
      <h1>Carrinho</h1>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Não há itens no seu carrinho</p>
      ) : (
        cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onUpdateCart={onUpdateCart}
            onDelete={onDelete}
          />
        ))
      )}

      {cartItems.length > 0 && (
        <div className="totalPrice">
          <div className="price-itens">
            <p>Total :</p>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <CheckoutButton
            onCheckout={onCheckout}
            setCart={setCart}
            cartItems={cartItems}
          />
        </div>
      )}
    </div>
  );
};

Cart.propTypes = {
  cartItems: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onUpdateCart: PropTypes.func,
  onCheckout: PropTypes.func,
  setCart: PropTypes.func,
};

export default Cart;
