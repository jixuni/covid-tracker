import React from "react";
import search from "../api/index";

const SearchBar = () => {
  // const searchApi = async () => {
  //   const response = await search.get("/countries");
  //   console.log(response);
  // };
  // searchApi();

  return (
    <div className="search-bar ui segment">
      <form className="ui form">
        <div className="field">
          <label>Search by country</label>
          <input type="text"></input>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
