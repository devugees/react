import React from 'react';
import {render} from 'react-dom';


class SearchFunction extends React.Component{
  render(){
    return (
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" onChange={this.props.handleSearchChange}/>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        <button id="test" type="button" className="btn btn-lg btn-danger ml-3" data-toggle="popover" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?"><i className="fa fa-heart-o" aria-hidden="true"></i></button>
      </form>
    )
  }
}


export default SearchFunction;
