import React, { useEffect } from "react";
import Header from "../../components/Header";
import CardList from "../CardList";
import SearchAndFilter from "../SearchAndFilter";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CountryDetails from "../CountryDetails";
import { getCountries, toggleTheme } from "../../actions";
import { connect } from "react-redux";
import styles from "./styles.module.scss";
import cx from 'classnames';

function App({ fetchCountries, loading, toggleTheme, theme }) {
  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);

  return (
    <div className={cx(styles.bodyContainer, theme)}>
      <Header toggleTheme={toggleTheme} theme={theme}/>
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
    theme: state.theme
  };
};

function mapDispatchToProps(dispatch) {
  return {
    fetchCountries: () => dispatch(getCountries()),
    toggleTheme: () => dispatch(toggleTheme())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
