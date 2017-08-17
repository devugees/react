import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';



import Modal from './Modal.jsx';
import ProductsList from './ProductsList.jsx';
import Footer from './Footer.jsx';
import NavJumbotron from './NavJumbotron.jsx';
import Nav from './Nav.jsx';


class HomePage extends React.Component {

  render() {
    return (
      <div>
        <div className="container main">
          <NavJumbotron/>
          <br/>
          <ProductsList products={this.props.products} addToCart={this.props.addToCart}/>
          <br/>
        </div>
        <Modal cart={this.props.cart}/>
        <Footer/>
      </div>
    )
  }

}

export default HomePage;
