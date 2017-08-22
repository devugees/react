import React from 'react';
import LikeCount from './LikeCount.jsx'

class Product extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleCartClick = this.handleCartClick.bind(this);
    this.handleWishlistClick = this.handleWishlistClick.bind(this);

    this.state = {
      addedToWishlist: false
    };
  }

  handleCartClick() {
    this.props.addToCart(this.props.product);
  }

  handleWishlistClick() {
    if (!this.state.addedToWishlist){
      this.props.addToWishlist(this.props.product);
      this.setState({addedToWishlist: true});
    }
  }

  render() {
    let {title, description, price, img} = this.props.product;
    let wishlistClass = this.state.addedToWishlist ? 'fa-heart' : 'fa-heart-o';

    return (
      <div className="card">
        <img className="card-img-top" src={img} alt={title}/>
        <div className="card-body">
          <button onClick={this.handleWishlistClick} type="button" className="btn btn-lg btn-danger pull-right">
            <i className={"fa " + wishlistClass} aria-hidden="true"></i>
          </button>
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{description}</p>
          <p className="text-right">{price + "$"}</p>
          <button className="btn btn-dark card-img-bottom" onClick={this.handleCartClick}>Add to Cart</button>
          <LikeCount/>
        </div>
      </div>
    );
  }
}

export default Product;
