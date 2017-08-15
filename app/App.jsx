import React from 'react';
import {render} from 'react-dom';
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

render(<App/>, document.getElementById('app'));
