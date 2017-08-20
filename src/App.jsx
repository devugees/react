import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Nav from './Nav.jsx';
import HomePage from "./HomePage.jsx";
import ProductPage from "./ProductPage.jsx";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
    this.state = {
      searchState: this.props.products,
      cartArray: [],
      wishlist:[]
    };
    this.handleradd = this.handleradd.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  addToCart(title, text, price, picSrc ) {
    let cartItem = {
      title: title,
      text: text,
      price: price,
      src: picSrc
    }
    let newCartArray = this.state.cartArray;
    newCartArray.push(cartItem);
    this.setState({cartArray: newCartArray});
  }

  handleSearchChange(event) {
    let query=(event.target.value).toLowerCase();

    let newProducts = this.props.products.filter((p) => {
      let title = p.title.toLowerCase();
      let index = title.indexOf(query);
      return index !== -1;
    });
    this.setState({searchState: newProducts})

  }
  handleradd(title){
  let newWishlist = this.state.wishlist
  newWishlist.push(title);
    this.setState({wishlist:newWishlist})
  }

  render() {
    return (
      <Router>
      <div>
        <Nav itemCount={this.state.cartArray.length} handleSearchChange={this.handleSearchChange} wishlist={this.state.wishlist}/>
        <Route exact path="/" render={()=><HomePage products={this.state.searchState} cart={this.state.cartArray} addToCart={this.addToCart} handleradd={this.handleradd} /> } />
        <Route  path="/addproduct" component={ProductPage}  />
      </div>
      </Router>
    );

  }
}

export default App;
