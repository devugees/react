import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class PageAddProduct extends React.Component {

  render() {

    return (
      <div className="container main input-group">
        <form>
          <h2>Name oF Product</h2>
          <input type="text"></input>
          <h3>Price oF Product</h3>
          <input type="text"></input>
          <br/>
          <input className="btn btn-primary"type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}
export default PageAddProduct;
