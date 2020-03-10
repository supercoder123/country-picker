import React, { useEffect } from "react";
import { connect } from "react-redux";
import Card from "../../components/Card";
import styles from "./styles.module.scss";
import Loader from '../../components/Loader';
import { getCountries } from "../../actions";

const CardList = ({ searchResults, loading, fetchCountries }) => {
  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);
    
  if (loading) {
    return <Loader />;
  }
  return (
    <div className={styles.container}>
      <div className={styles.cardGrid}>
        {searchResults.map((country, index) => {
          return (
            <Card
              key={index}
              imgUrl={country.flag}
              countryName={country.name}
              population={country.population}
              region={country.region}
              capital={country.capital}
            />
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    searchResults: state.searchResults,
    loading: state.loading
  };
};

function mapDispatchToProps(dispatch) {
    return {
      fetchCountries: () => dispatch(getCountries())
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
