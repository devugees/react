import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Modal from './Modal.jsx';
import ProductsList from './ProductsList.jsx';
import Footer from './Footer.jsx';
import NavJumbotron from './NavJumbotron.jsx';
import Nav from './Nav.jsx';
import HomePage from "./HomePage.jsx";
import ProductPage from "./ProductPage.jsx";


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

    let newProducts = this.props.products.filter((p) => {
      let title=(p.title).toLowerCase();
      let index=title.indexOf(query);
      return index!=-1;
    });
    this.setState({searchState: newProducts})

  }

  render() {
    return (
      <Router>
      <div>
        <Nav itemCount={this.state.cartArray.length} handleSearchChange={this.handleSearchChange}/>
        <Route exact path="/home" render={()=><HomePage products={this.state.searchState} cart={this.state.cartArray} addtocart={this.addToCart}/>} />
        <Route  path="/addproduct" component={ProductPage}  />
      </div>
      </Router>
    );

  }
}

export default App;
