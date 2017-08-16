import React from 'react';
import {render} from 'react-dom';

import Product from 'Product.jsx';

class ProductsList extends React.Component {

  render() {
    const tempArr = this.props.products.map((product,index) => {
      return (
        <Product
          key={index}
          text={product.description}
          title={product.title}
          price={product.price}
          picSrc={product.img} />);
    });

    return (
      <div>
        <h3>Productlist</h3>
        <div className="card-deck">
          {tempArr}
        </div>
      </div>
    )
  }
}
export default ProductsList;
