import React, { useEffect, useState } from "react";
import Cards from "./components/Cards";
import SearchBar from "./components/SearchBar";
import dataSearch from "./api/index";
import Chart from "./components/Graph";

const App = () => {
  const [countries, setCountries] = useState([]);

  const [deathCount, setDeathsCount] = useState(0);
  const [recoverCount, setRecoverCount] = useState(0);
  const [confirmedCount, setConfirmCount] = useState(0);

  const allCountries = async () => {
    const response = await dataSearch.get("/countries/USA");
    const { deaths, confirmed, recovered } = response.data;

    setDeathsCount(deaths.value);
    setRecoverCount(recovered.value);
    setConfirmCount(confirmed.value);

    setCountries([response]);
  };

  useEffect(() => {
    allCountries(countries);
  }, []);
  console.log(deathCount, recoverCount, confirmedCount);

  return (
    <div className="ui container">
      <div className="ui grid">
        <Cards count={deathCount} name="Total Deaths" />
        <Cards count={recoverCount} name="Total Recovered" />
        <Cards count={confirmedCount} name="Total Confirmed" />
      </div>
    </div>
  );
};

export default App;
