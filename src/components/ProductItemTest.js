import { useContext } from 'react';

import ProductItemForm from '../cartComponents/Products/ProductItemForm';
import CartContext from '../store/cart-context';

const ProductItem = props => {

    const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    });
  };

    return(
        <div >
          <div>
          {/* <h3>{props.name}</h3>
            <div>{price}</div> */}
          </div>
          <div>
          <ProductItemForm id={props.id} onAddToCart={addToCartHandler} />
          </div>
        </div>
      );

};
export default ProductItem;