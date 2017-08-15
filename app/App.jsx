import React from 'react';
import {render} from 'react-dom';


import ProdList from 'ProductionList.jsx';
import FooterApp from 'Footer.jsx';
import NavJumbotron from 'NavJumbotron.jsx' ;
import LikeCount from 'LikeCount.jsx'
import Nav from 'nav.jsx';
import Modal from 'Modal.jsx';



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
        <NavJumbotron/>
        <LikeCount id="2" likes={this.state.likesCount} updateLikes={this.updateLikes} />
        <br/>
        <ProdList/>
        <br/>
        <FooterApp/>
        <Modal/>
      </div>
    );

  }
}

render(<App/>, document.getElementById('app'));

$(function () {
  $('[data-toggle="popover"]').popover()
})
