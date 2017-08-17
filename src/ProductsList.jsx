import React from 'react';

import Product from './Product.jsx';

class ProductsList extends React.Component {
  render() {
    const tempArr = this.props.products.map((product,index) => {
      return (
        <Product
          key={index}
          handleradd= {() => this.props.handleradd(product.title)}
          text={product.description}
          title={product.title}
          price={product.price}
          picSrc={product.img}
          addToCart={this.props.addToCart}/>);
    });

    return (
      <div>
        <h3>Productlist ({tempArr.length})</h3>
        <div className="card-columns">
          {tempArr}
        </div>
      </div>
    )
  }
}
export default ProductsList;
