import React from 'react';
import {render} from 'react-dom';



const Comp = ({text,title,prize,picSrc}) =>{
  return(
    <div className="card">
      <img className="card-img-top" src={picSrc} alt="Card image cap"/>
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text" >{text}</p>
        <p className="text-right">{prize}</p>
         <a href="#" className="btn btn-primary card-img-bottom ">buy me</a>

      </div>
    </div>
  );
}


class ProdComponent extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        picSrc: props.picSrc,
        title: props.title,
        text : props.text,
        prize: props.prize
      }
    }
  render() {

    return <Comp text={this.state.text} title={this.state.title} prize={this.state.prize} picSrc={this.state.picSrc}/>
  }
}

export default ProdComponent;
