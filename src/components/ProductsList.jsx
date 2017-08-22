import React from 'react';
import Product from './Product.jsx';

const ProductsList = (props) => {
  const products = props.products.map((product,index) => {
    return (
      <Product
        key={index}
        product={product}
        addToCart={props.addToCart}
        addToWishlist={props.addToWishlist} />);
  });

  return (
    <div>
      <h3>We offer {products.length} product(s)</h3>
      <div className="card-columns">
        {products}
      </div>
    </div>
  );
}

export default ProductsList;
