import React from 'react';
import {render} from 'react-dom';


class SearchFunction extends React.Component{
  render(){
    return (
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" onChange={this.props.handleSearchChange}/>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    )
  }
}


export default SearchFunction;
