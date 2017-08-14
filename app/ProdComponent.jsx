import React from 'react';
import {render} from 'react-dom';



const Comp = ({text}) =>{
  return(
    <div className="card">
      <img className="card-img-top" src="http://www.placehold.it/300x200" alt="Card image cap"/>
      <div className="card-body">
        <p className="card-text" >{text}</p>
      </div>
    </div>
  );
}


class ProdComponent extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        text : props.text
      }
    }
  render() {

    return <Comp text={this.state.text}/>
  }
}

export default ProdComponent;
