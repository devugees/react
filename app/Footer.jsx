import React from 'react';
import {render} from 'react-dom';


class FooterApp extends React.Component{
  render(){
    return (
      <div>
        <footer id="footer-app" className="py-3 bg-light" >
          <div className="container text-center">
            <a href="#">Copyright</a> // <a href="#">Aknowledgements</a> // <a href="#">Imprint</a>
          </div>
        </footer>
      </div>
    )
  }
}


  export default FooterApp;
