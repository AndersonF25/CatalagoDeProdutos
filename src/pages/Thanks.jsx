import { useLocation, useNavigate } from "react-router-dom";

const Thanks = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const items = location.state.cartItems;

  const handleBackHome = () => {
    navigate("/");
  };

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container-thanks">
      <h1>Obrigado pela preferência</h1>
      <h3>confira abaixo seus itens</h3>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity} - ${item.price}
          </li>
        ))}
      </ul>
      <div className="total">
        <span>Total: ${totalPrice.toFixed(2)}</span>
        <button className="btn-from-checkout" onClick={handleBackHome}>
          Voltar a pagina inicial
        </button>
      </div>
    </div>
  );
};

export default Thanks;
