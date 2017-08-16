import React from 'react';
import SearchFunction from 'SearchFunction.jsx';

class Nav extends React.Component {
  render() {

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a classNameName="navbar-brand" href="#"> <span><img src="imgs/logo.png" id="logo"/></span></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Stonergees
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " data-toggle="modal" data-target="#exampleModalLong" href="#">Cart</a>
              </li>
            </ul>
            <SearchFunction handleSearchChange={this.props.handleSearchChange}/>
            <button id="test" type="button" className="btn btn-lg btn-danger ml-3" data-toggle="popover" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?"><i className="fa fa-heart-o" aria-hidden="true"></i></button>

          </div>
        </div>
      </nav>
    );
  }
}
export default Nav;
