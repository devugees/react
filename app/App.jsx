import React from 'react';
import {render} from 'react-dom';


import ProductsList from 'ProductsList.jsx';
import FooterApp from 'Footer.jsx';
import NavJumbotron from 'NavJumbotron.jsx' ;
import LikeCount from 'LikeCount.jsx'
import Nav from 'nav.jsx';
import Modal from 'Modal.jsx';

const PRODUCTS = [
  {description: 'ehoyo', title: 'Cuban Cigar', price: '1000 $', img: 'imgs/cubancigar.jpg'},
  {description: 'bombom', title: 'Mustang', price: '2000 $', img: 'imgs/mustang.jpg'},
  {description: 'muchacha', title: 'Hashesh', price: '3000 $', img: 'imgs/hash.jpg'}
];

class App extends React.Component {
  render () {
    return (
      <div>
        <Nav/>
        <NavJumbotron/>
        <LikeCount id="2"/>
        <br/>
        <ProductsList products={PRODUCTS}/>
        <br/>
        <FooterApp/>
        <Modal/>
      </div>
    );

  }
}

render(<App/>, document.getElementById('app'));
