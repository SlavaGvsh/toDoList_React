import React from "react";
import { useState } from "react";

const SearchItems = ({ setSearchTerm }) => {
  const [serchItems, setSerchItems] = useState("");

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setSerchItems(searchValue);
    setSearchTerm(searchValue);
    // console.log(searchValue);
  };
  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        role="serchbox"
        placeholder="Search Item"
        value={serchItems}
        onChange={handleSearch}
      />
    </form>
  );
};

export default SearchItems;
