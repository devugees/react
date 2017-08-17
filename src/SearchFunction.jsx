import React from 'react';


class SearchFunction extends React.Component{
  render(){
    return (
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-4" type="text" placeholder="Search" aria-label="Search" onChange={this.props.handleSearchChange}/>

      </form>
    )
  }
}


export default SearchFunction;
