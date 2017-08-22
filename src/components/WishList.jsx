import React from 'react';

class WishList extends React.Component {
  render() {
    let content = <p>No items, yet.</p>;
    if (this.props.products.length > 0) {
      let list = this.props.products.map(product => <li>{product.title}</li>);
      content = <ul>{list}</ul>;
    }
    return (
      <div className="wishlist">
        {content}
      </div>
    )
  }
}

export default WishList;
