import React from 'react';
import {render} from 'react-dom';

class ProdList extends React.Component{
  render(){
    return( <div>
      <h3>Productlist</h3>
      <div className="card-group mt-3" id="product-app">
        <div className="card" >
          <img className="card-img-top" src="http://www.placehold.it/300x200" alt="Card image cap"/>
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div className="card" >
          <img classNameName="card-img-top" src="http://www.placehold.it/300x200" alt="Card image cap"/>
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div className="card" >
          <img className="card-img-top" src="http://www.placehold.it/300x200" alt="Card image cap"/>
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div className="card" >
          <img className="card-img-top" src="http://www.placehold.it/300x200" alt="Card image cap"/>
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
    </div>)
  }
}
export default ProdList;
