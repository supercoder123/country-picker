import React, { useEffect } from "react";
import Header from "../../components/Header";
import CardList from "../CardList";
import SearchAndFilter from "../SearchAndFilter";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CountryDetails from "../CountryDetails";
import Loader from '../../components/Loader';
import { getCountries } from "../../actions";
import { connect } from "react-redux";

function App({ fetchCountries, loading }) {
  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);
    
  if (loading) {
    return <Loader />;
  }
  
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
            <CardList />
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
