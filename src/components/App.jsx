import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Cart from './Cart.jsx';
import Footer from './Footer.jsx';
import Navigation from './Navigation.jsx';
import CopyrightPage from "./CopyrightPage.jsx";
import ImprintPage from "./ImprintPage.jsx";
import HomePage from "./HomePage.jsx";
import AddProductPage from "./AddProductPage.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.addToCart = this.addToCart.bind(this);
    this.addToWishlist = this.addToWishlist.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.addProduct = this.addProduct.bind(this);

    let products = JSON.parse(localStorage.getItem('products')) || this.props.products;
    this.state = {
      products: products,
      filteredProducts: products,
      cart: [],
      wishlist: []
    };
  }

  addToCart(product) {
    let newCart = this.state.cart;
    newCart.push(product);
    this.setState({cart: newCart});
  }
  addToWishlist(product) {
    let newWishlist = this.state.wishlist
    newWishlist.push(product);
    this.setState({wishlist: newWishlist})
  }
  addProduct(product) {
    let newProducts = this.state.products;
    newProducts.push(product);
    this.setState({products: newProducts});
    localStorage.setItem('products', JSON.stringify(newProducts));
  }

  handleSearchChange(query) {
    query = query.toLowerCase();
    let newProducts = this.state.products.filter((p) => {
      return p.title.toLowerCase().indexOf(query) !== -1;
    });
    this.setState({filteredProducts: newProducts.stringify()})
  }

  render() {
    return (
      <Router>
        <div>
          <Navigation
            itemCount={this.state.cart.length}
            handleSearchChange={this.handleSearchChange}
            wishlist={this.state.wishlist} />

          <Route exact path="/" render={() => (
            <HomePage
              products={this.state.filteredProducts}
              cart={this.state.cart}
              addToCart={this.addToCart}
              addToWishlist={this.addToWishlist} />)
          } />
          <Route path="/addproduct" render={() => (
            <AddProductPage handleAddProduct={this.addProduct} />)
          } />
          <Route path="/imprint" component={ImprintPage} />
          <Route path="/copyright" component={CopyrightPage} />

          <Footer/>
          <Cart products={this.state.cart} />
        </div>
      </Router>
    );

  }
}

export default App;
