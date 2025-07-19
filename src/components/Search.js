import React from "react";

function Search({Search,onSearchChange}) {
  return (
    <div className="filter">
      <input id="search-bar" type="text" placeholder="Search Notes" value={Search} onChange={onSearchChange}/>
    </div>
  );
}

export default Search;
