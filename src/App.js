import React, { useEffect, useState } from "react";
import Cards from "./components/Cards";
import SearchBar from "./components/SearchBar";
import dataSearch from "./api/index";
import Chart from "./components/Graph";

const App = () => {
  const [countries, setCountries] = useState([]);

  const allCountries = async () => {
    const response = await dataSearch.get("/countries");
    setCountries([response.data.countries]);
  };

  useEffect(() => {
    allCountries(countries);
  }, []);
  console.log(countries);

  return (
    <React.Fragment>
      <Chart />
    </React.Fragment>
  );
};

export default App;
