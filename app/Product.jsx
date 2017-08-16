import React from 'react';
import {render} from 'react-dom';

import LikeCount from 'LikeCount.jsx'

class Product extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="card">
        <img className="card-img-top" src={this.props.picSrc} alt="Card image cap"/>
        <div className="card-body">
          <h4 className="card-title">{this.props.title}</h4>
          <p className="card-text" >{this.props.text}</p>
          <p className="text-right">{this.props.prize}</p>
          <a href="#" className="btn btn-dark card-img-bottom ">Add to Cart</a>
          <LikeCount />
        </div>
      </div>);
  }
}

export default Product;
