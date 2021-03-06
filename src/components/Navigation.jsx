import React from 'react';
import SearchBar from './SearchBar.jsx';
import WishListButton from './WishListButton.jsx';
import {Link} from 'react-router-dom';

const Nav = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">
          <span><img src="imgs/logo.png" id="logo" alt="logo"/></span>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#home">
                DEVUGEES
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/addproduct" className="nav-link">Add Product</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="modal" data-target="#exampleModalLong" href="#" id="cart">
                <img src="imgs/shopping-cart.png" alt="cart"/>
                <span>{props.itemCount}</span>
              </a>
            </li>

          </ul>
          <SearchBar handleSearchChange={props.handleSearchChange}/>
          <WishListButton products={props.wishlist}/>
        </div>
      </div>
    </nav>
  );
}
export default Nav;
