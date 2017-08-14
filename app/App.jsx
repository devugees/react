import React from 'react';
import {render} from 'react-dom';
import Modal from 'Modal.jsx';
import Nav from 'nav.jsx';
import LikeCount from 'LikeCount.jsx'

class App extends React.Component {
  render () {
    return (
      <div>
        <LikeCount id="2"/>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
render(<Nav/>,document.getElementById('nav-app'));
render(<Modal/>,document.getElementById('modal-app'));
