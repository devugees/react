import React from 'react';
import {render} from 'react-dom';

import ProductsList from 'ProductsList.jsx';
import FooterApp from 'Footer.jsx';
import NavJumbotron from 'NavJumbotron.jsx';
import Nav from 'nav.jsx';
import Modal from 'Modal.jsx';

const PRODUCTS = [
  {
    description: 'ehoyo',
    title: 'Cuban Cigar',
    price: 1000,
    img: 'imgs/cubancigar.jpg'
  }, {
    description: 'bombom',
    title: 'Mustang',
    price: 1000,
    img: 'imgs/mustang.jpg'
  }, {
    description: 'muchacha',
    title: 'Hashesh',
    price: 10,
    img: 'imgs/hash.jpg'
  }
];

let cartArray = [];
class App extends React.Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
    this.state =
     {cart :[]}
  }
  cartSum() {
    let sum = 0 ;
    for(let i = 0 ; i < cartArray.length ; i++) {

      sum +=cartArray[i].price;
    }
    console.log(sum);
    return sum;
  }
  addToCart(title, text, price, picSrc ) {
    //preventDefault();
    let cartItem = {
      title: title,
      text: text,
      price: price,
      src :picSrc
    }
    cartArray.push(cartItem);
    console.log(cartArray);
    let renderdCartItem = cartArray.map((item) => {

      return (
        <li className="media">
          <img className="d-flex mr-3" src={item.src} alt="Generic placeholder image"/>
          <div className="media-body">
            <h5 className="mt-0 mb-1">{item.title}</h5>
            <h6>{item.price+"$"}</h6>
            <p>{item.text}</p>
          </div>
        <hr/>
        </li>
      );
    });

    console.log(renderdCartItem);
    this.cartSum();
    this.setState({cart:renderdCartItem})
    return cartArray;
  }


  render() {
    return (
      <div>
        <Nav itemCount={cartArray.length}/>
        <div className="container main">
          <NavJumbotron/>
          <br/>
          <ProductsList products={PRODUCTS} addToCart={this.addToCart}/>
          <br/>
          <FooterApp/>
        </div>
        <Modal cart={this.state.cart} sum={this.cartSum()}/>
      </div>
    );

  }
}

render(
  <App/>, document.getElementById('app'));

$(function() {
  $('[data-toggle="popover"]').popover()
})
