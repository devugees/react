import React from 'react';
import LikeCount from './LikeCount.jsx'

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { heart:"fa-heart-o"};
    this.handleWishlistClick = this.handleWishlistClick.bind(this);
  }
  handleClick(event) {
    event.preventDefault();
    this.props.addToCart(this.props.title, this.props.text, this.props.price,this.props.picSrc);
  }
  handleWishlistClick() {
    this.props.handleradd(this.props.title);
    if(this.state.heart == "fa-heart-o"){
      this.setState({heart:"fa-heart"})
      } else {
      this.setState({heart:"fa-heart-o"})
    }
}
  
  render() {

     return (
      <div className="card">
        <img className="card-img-top" src={this.props.picSrc} alt={this.props.title}/>
        <div className="card-body">
         <button onClick={this.handleWishlistClick} type="button" className="btn btn-lg btn-danger pull-right"><i className={"fa "+this.state.heart} aria-hidden="true"></i></button>
          <h4 className="card-title">{this.props.title}</h4>
          <p className="card-text">{this.props.text}</p>
          <p className="text-right">{this.props.price+"$"}</p>
          <button className="btn btn-dark card-img-bottom" onClick={this.handleClick}>Add to Cart</button>
          <LikeCount/>
        </div>
      </div>
    );
  }
}

export default Product;
