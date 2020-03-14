import React, { useEffect } from "react";
import Header from "../../components/Header";
import CardList from "../CardList";
import SearchAndFilter from "../SearchAndFilter";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CountryDetails from "../CountryDetails";
import { getCountries } from "../../actions";
import { connect } from "react-redux";

function App({ fetchCountries, loading }) {
  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);

  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route path="/details">
            <CountryDetails />
          </Route>
          <Route path="/">
            <SearchAndFilter />
            <CardList loading={loading} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    fetchCountries: () => dispatch(getCountries())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
