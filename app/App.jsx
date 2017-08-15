import React from 'react';
import {render} from 'react-dom';


import ProdList from 'ProductionList.jsx';
import FooterApp from 'Footer.jsx';
import NavJumbotron from 'NavJumbotron.jsx' ;
import LikeCount from 'LikeCount.jsx'
import Nav from 'nav.jsx';
import Modal from 'Modal.jsx';



class App extends React.Component {
  render () {
    return (
      <div>
        <Nav/>
        <NavJumbotron/>
        <LikeCount id="2"/>
        <ProdList/>
        <FooterApp/>
        <Modal/>
      </div>
    );

  }
}

render(<App/>, document.getElementById('app'));
