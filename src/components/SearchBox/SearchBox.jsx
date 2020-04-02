import React from "react";
import "./SearchBox.css";

const SearchBox = ({ placeholder, onSearch }) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={onSearch}
    />
  );
};

export default SearchBox;
