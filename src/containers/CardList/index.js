import React from "react";
import { connect } from "react-redux";
import Card from "../../components/Card";
import styles from "./styles.module.scss";
import Loader from '../../components/Loader';

const CardList = ({ searchResults, loading }) => {
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
              country={country}
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
  };
};

export default connect(mapStateToProps, null)(CardList);
