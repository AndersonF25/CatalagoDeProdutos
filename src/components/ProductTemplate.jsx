import { useState } from 'react'
import PropTypes from 'prop-types'

const ProductTemplate = ({ product, onAddToCart }) => {

    const [quantityItem, setQuantityItem] = useState(1)

    return (

        <div className="product">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <div className='quantity-items'>
                <select onChange={(e) => setQuantityItem(parseInt(e.target.value))}>
                    {[...Array(10).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                            {x + 1}
                        </option>
                    ))}
                </select>
                <button
                    onClick={() => onAddToCart(product, quantityItem)}
                    className='btn-from-cart'>Adicionar ao carrinho
                </button>
            </div>
        </div>

    )
}



ProductTemplate.propTypes = {
    product: PropTypes.object,
    onAddToCart: PropTypes.func,
    quantity: PropTypes.number,
    onItemsCart: PropTypes.func
}

export default ProductTemplate