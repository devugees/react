import React from 'react';

const SearchBar = (props) => {
  return (
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-4" type="text" placeholder="Search" aria-label="Search"
        onChange={(e) => props.handleSearchChange(e.target.value)} />
    </form>
  )
}

export default SearchBar;
