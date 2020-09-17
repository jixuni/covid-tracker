import React from "react";
import Cards from "./components/Cards";
import SearchBar from "./components/SearchBar";

export default () => {
  return (
    <React.Fragment>
      <SearchBar />
      <Cards />
    </React.Fragment>
  );
};
