import {} from "react";
import productsData from "../data/products_mock.json";
import ProductTemplate from "../components/ProductTemplate";
import PropTypes from "prop-types";

const Catalogo = ({ onAddToCart }) => {
  return (
    <div className="container-catalogo">
      <h1>Catálogo de Produtos</h1>
      <div className="products-container">
        {productsData.map((product) => (
          <ProductTemplate
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

Catalogo.propTypes = {
  onAddToCart: PropTypes.func.isRequired,
};

export default Catalogo;
