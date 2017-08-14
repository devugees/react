import React from 'react';
import {render} from 'react-dom';
import LikeCount from 'LikeCount.jsx'
import Nav from 'nav.jsx';


class App extends React.Component {
  render () {
    return (
      <div>
        <LikeCount id="2"/>
      </div>
    );
  }
}

render(<Nav/>,document.getElementById('nav-app'));
render(<App/>, document.getElementById('app'));
