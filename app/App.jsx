import React from 'react';
import {render} from 'react-dom';
import NavJumbotron from 'NavJumbotron.jsx' ;
import LikeCount from 'LikeCount.jsx'
import Nav from 'nav.jsx';
import Modal from 'Modal.jsx';


class App extends React.Component {
  render () {
    return (
      <div>
        <Nav/>
        <LikeCount id="2"/>
        <Modal/>
      </div>
    );
  }
}
render(<NavJumbotron/>, document.getElementById('jumbotron-app'));
render(<App/>, document.getElementById('app'));
