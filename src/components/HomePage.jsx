import React from 'react';
import ProductsList from './ProductsList.jsx';


class HomePage extends React.Component {

  render() {
    return (
      <div className="container main">
          <div className="jumbotron jumbotron-fluid bg-transparent">
            <h1 className="display-3">Hello, welcome.</h1>
            <p className="lead">Here you will find all the products we are offering. Feel free to explore.</p>
          </div>
          <ProductsList
            products={this.props.products}
            addToCart={this.props.addToCart}
            addToWishlist={this.props.addToWishlist}/>
      </div>
    )
  }

}

export default HomePage;
