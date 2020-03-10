import React from "react";
import Header from "../../components/Header";
import CardList from "../CardList";
import SearchAndFilter from "../SearchAndFilter";

function App({ fetchCountries }) {
  return (
    <div>
      <Header />
      <SearchAndFilter />
      <CardList />
    </div>
  );
}

export default App;
