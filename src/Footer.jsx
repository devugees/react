import React from 'react';

class Footer extends React.Component{
  render(){
    return (
      <div>
        <footer id="footer-app" className="py-3 bg-light" >
          <div className="container text-center">
            <a href="#copyright">Copyright</a> \\ <a href="#ack">Acknowledgements</a> \\ <a href="#imprint">Imprint</a>
          </div>
        </footer>
      </div>
    )
  }
}

export default Footer;
