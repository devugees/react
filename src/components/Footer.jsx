import React from 'react';
import {Link} from 'react-router-dom';

class Footer extends React.Component{
  render(){
    return (
      <div>
        <footer id="footer-app" className="py-3 bg-light" >
          <div className="container text-center">
            <Link to="/copyright">Copyright</Link>
            &nbsp; \\ &nbsp;
            <Link to="/imprint">Imprint</Link>
          </div>
        </footer>
      </div>
    )
  }
}

export default Footer;
