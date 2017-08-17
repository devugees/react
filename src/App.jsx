import React from 'react';
import ProductsList from './ProductsList.jsx';
import Footer from './Footer.jsx';
import NavJumbotron from './NavJumbotron.jsx';
import Nav from './Nav.jsx';
import Modal from './Modal.jsx';

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
  handleradd(title){
  let newWishlist = this.state.wishlist
  newWishlist.push(title);
    this.setState({wishlist:newWishlist})
  }

  render() {
    return (
      <div>
        <Nav itemCount={this.state.cartArray.length} handleSearchChange={this.handleSearchChange} wishlist={this.state.wishlist}/>
        <div className="container main">
          <NavJumbotron/>
          <br/>
          <ProductsList products={this.state.searchState} addToCart={this.addToCart} handleradd= {this.handleradd}/>
          <br/>
        </div>
        <Modal cart={this.state.cartArray} />
        <Footer/>
      </div>
    );

  }
}

export default App;
