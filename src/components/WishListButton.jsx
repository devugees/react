import React from 'react';
import WishList from './WishList.jsx';

class WishListButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showList: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      showList: !this.state.showList
    });
  }

  render() {
    let tooltip = null;
    let heart;

    if (this.state.showList) {
      tooltip = <WishList products={this.props.products}/>;
      heart = "fa-heart"
    } else {
      heart = "fa-heart-o"
    }

    return (
      <button onClick={this.onClick} type="button" className="btn btn-lg btn-danger ml-3 my-tooltip wishlist_button">
        <i className={"fa " + heart} aria-hidden="true"></i>
        {tooltip}
      </button>

    );
  }
}

export default WishListButton;
