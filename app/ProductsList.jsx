import React from 'react';
import {render} from 'react-dom';

import Product from 'Product.jsx';

class ProductsList extends React.Component {
  constructor(props) {
    super(props);
    //this.props.addToCart = this.addToCart.bind(this);
  }
  render() {

    const tempArr = this.props.products.map((product) => {
      return (
        <Product
          text={product.description}
          title={product.title}
          price={product.price}
          picSrc={product.img}
          addToCart={this.props.addToCart}/>);
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
