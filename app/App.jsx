import React from 'react';
import {render} from 'react-dom';


import ProductsList from 'ProductsList.jsx';
import FooterApp from 'Footer.jsx';
import NavJumbotron from 'NavJumbotron.jsx' ;
import Nav from 'nav.jsx';
import Modal from 'Modal.jsx';

const PRODUCTS = [
  {description: 'ehoyo', title: 'Cuban Cigar', price: '1000 $', img: 'imgs/cubancigar.jpg'},
  {description: 'bombom', title: 'Mustang', price: '2000 $', img: 'imgs/mustang.jpg'},
  {description: 'muchacha', title: 'Hashesh', price: '3000 $', img: 'imgs/hash.jpg'}
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {likesCount:localStorage.likes};
    this.updateLikes = this.updateLikes.bind(this);
  }

  updateLikes() {
    this.setState({likesCount:localStorage.likes})
  }


  render () {
    return (
      <div>
        <Nav/>
        <div className="container main">
        <NavJumbotron/>
        <br/>
        <ProductsList products={PRODUCTS}/>
        <br/>
        <FooterApp/>
        </div>
        <Modal/>
      </div>
    );

  }
}

render(<App/>, document.getElementById('app'));

$(function () {
  $('[data-toggle="popover"]').popover()
})
