import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

const CheckoutButton = ({ cartItems, setCart }) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    cartItems.length > 0
      ? toast.success("Compra finalizada com sucesso!")
      : toast.error("Você não tem itens no carrinho");

    navigate("/thank-you", { state: { cartItems } });

    setCart([]);
  };

  return (
    <button className="btn-from-checkout" onClick={handleCheckout}>
      Finalizar compra
    </button>
  );
};

CheckoutButton.propTypes = {
  cartItems: PropTypes.array,
  setCart: PropTypes.any,
  totalPrice: PropTypes.func,
};

export default CheckoutButton;
