import React from 'react';
import {render} from 'react-dom';


class FooterApp extends React.Component{
  render(){
    return (
      <div>
        <footer id="footer-app" className="py-3 bg-light" >
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <h4>Nav</h4>
                <ul className="list-group">
                  <li className="list-group-item list-group-item-action list-group-item-warning">Cras justo odio</li>
                  <li className="list-group-item list-group-item-action list-group-item-warning">Dapibus ac facilisis in</li>
                  <li className="list-group-item list-group-item-action list-group-item-warning">Morbi leo risus</li>
                  <li className="list-group-item list-group-item-action list-group-item-warning">Porta ac consectetur ac</li>
                  <li className="list-group-item list-group-item-action list-group-item-warning">Vestibulum at eros</li>
                </ul>
              </div>
              <div className="col-md-4">
                <h4>Nav</h4>
                <ul className="list-group">
                  <li className="list-group-item list-group-item-action list-group-item-warning">Cras justo odio</li>
                  <li className="list-group-item list-group-item-action list-group-item-warning">Dapibus ac facilisis in</li>
                  <li className="list-group-item list-group-item-action list-group-item-warning">Morbi leo risus</li>
                  <li className="list-group-item list-group-item-action list-group-item-warning">Porta ac consectetur ac</li>
                  <li className="list-group-item list-group-item-action list-group-item-warning">Vestibulum at eros</li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}


  export default FooterApp;
