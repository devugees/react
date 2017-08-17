import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const PRODUCTS = [
  {
    description: 'ehoyo',
    title: 'Cuban Cigar',
    price: 1000,
    img: 'imgs/cubancigar.jpg'
  }, {
    description: 'bombom',
    title: 'Mustang',

    price: 1000,

    img: 'imgs/mustang.jpg'
  }, {
    description: 'muchacha',
    title: 'Hashesh',

    price: 10,

    img: 'imgs/hash.jpg'
  }
];

ReactDOM.render(<App products={PRODUCTS}/>, document.getElementById('app'));
registerServiceWorker();
