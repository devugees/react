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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
    this.state = {
      searchState: this.props.products, cartArray: []
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }
  addToCart(title, text, price, picSrc ) {
    //preventDefault();
    let cartItem = {
      title: title,
      text: text,
      price: price,
      src :picSrc
    }
    let newCartArray = this.state.cartArray;
    newCartArray.push(cartItem);
    this.setState({cartArray: newCartArray});
  }

  handleSearchChange(event) {
    let query=(event.target.value).toLowerCase();

    let newProducts = PRODUCTS.filter((p) => {
      let title=(p.title).toLowerCase();
      let index=title.indexOf(query);
      return index!=-1;
    });
    this.setState({searchState: newProducts})

  }

  render() {
    return (
      <div>
        <Nav itemCount={this.state.cartArray.length} handleSearchChange={this.handleSearchChange}/>
        <div className="container main">
          <NavJumbotron/>
          <br/>
          <ProductsList products={this.state.searchState} addToCart={this.addToCart}/>
          <br/>
          <FooterApp/>
        </div>
        <Modal cart={this.state.cartArray} />
      </div>
    );

  }
}

render(
  <div>
  <App key="1" products={PRODUCTS}/><App key="2" products={PRODUCTS}/>
  </div>, document.getElementById('app'));

$(function() {
  $('[data-toggle="popover"]').popover()
})
