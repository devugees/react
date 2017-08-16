import React from 'react';
import {render} from 'react-dom';

import ProductsList from 'ProductsList.jsx';
import FooterApp from 'Footer.jsx';
import NavJumbotron from 'NavJumbotron.jsx';
import LikeCount from 'LikeCount.jsx'
import Nav from 'nav.jsx';
import Modal from 'Modal.jsx';

const PRODUCTS = [
  {
    description: 'ehoyo',
    title: 'Cuban Cigar',
    price: '1000 $',
    img: 'imgs/cubancigar.jpg'
  }, {
    description: 'bombom',
    title: 'Mustang',
    price: '2000 $',
    img: 'imgs/mustang.jpg'
  }, {
    description: 'muchacha',
    title: 'Hashesh',
    price: '3000 $',
    img: 'imgs/hash.jpg'
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likesCount: localStorage.likes,
      searchState: PRODUCTS
    };
    this.updateLikes = this.updateLikes.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);

  }

  updateLikes() {
    this.setState({likesCount: localStorage.likes})
  }

  handleSearchChange(event) {
  let query=(event.target.value).toLowerCase();

    let newProducts = PRODUCTS.filter((p) => {
      let title=(p.title).toLowerCase();
      let index=title.indexOf(query);
      return index!=-1;
    });
    this.setState({searchState: newProducts})

  }

  render() {
    return (
      <div>
        <Nav handleSearchChange={this.handleSearchChange}/>
        <NavJumbotron/>
        <LikeCount id="2" likes={this.state.likesCount} updateLikes={this.updateLikes}/>
        <br/>
        <ProductsList products={this.state.searchState}/>
        <br/>
        <FooterApp/>
        <Modal/>
      </div>
    );

  }
}

render(
  <App/>, document.getElementById('app'));

$(function() {
  $('[data-toggle="popover"]').popover()
})
