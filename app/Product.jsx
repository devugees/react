import React from 'react';
import {render} from 'react-dom';

import LikeCount from 'LikeCount.jsx'

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    event.preventDefault();
    this.props.addToCart(this.props.title, this.props.text, this.props.price,this.props.picSrc);

  }
  render() {
    return (
      <div className="card">
        <img className="card-img-top" src={this.props.picSrc} alt="Card image cap"/>
        <div className="card-body">
          <h4 className="card-title">{this.props.title}</h4>
          <p className="card-text">{this.props.text}</p>
          <p className="text-right">{this.props.price+"$"}</p>
          <a href="#" className="btn btn-dark card-img-bottom" onClick={this.handleClick}>Add to Cart</a>
          <LikeCount/>
        </div>
      </div>
    );
  }
}

export default Product;
