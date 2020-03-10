import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./styles.module.scss";
import { connect } from "react-redux";
import BorderCountries from '../../components/BorderCountries';

const CountryDetails = ({ allCountries }) => {
  const history = useHistory();
  const countryDetails = history.location.state;
  const {
    name,
    flag,
    nativeName,
    region,
    population,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders
  } = countryDetails;

  return (
    <div className={styles.container}>
      <button className={styles.back} onClick={() => history.goBack()}>
        <i className="fa fa-long-arrow-left"></i>
        Back
      </button>

      <div className={styles.detailsGrid}>
        <img src={flag} alt="Flag" />
        <div className={styles.details}>
          <div className={styles.name}>{name}</div>
          <div className={styles.detailsPoints}>
            <div>
              <div>
                <span className={styles.point}>Native Name: </span>
                {nativeName}
              </div>
              <div>
                <span className={styles.point}>Population: </span>
                {population}
              </div>
              <div>
                <span className={styles.point}>Region: </span>
                {region}
              </div>
              <div>
                <span className={styles.point}>Sub Region: </span>
                {subregion}
              </div>
              <div>
                <span className={styles.point}>Capital: </span>
                {capital}
              </div>
            </div>
            <div>
              <div>
                <span className={styles.point}>Top Level Domains: </span>
                {topLevelDomain.join(", ")}
              </div>
              <div>
                <span className={styles.point}>Currencies: </span>
                {currencies
                  .map(currency => {
                    return currency.name;
                  })
                  .join(", ")}
              </div>
              <div>
                <span className={styles.point}>Languages: </span>
                {languages
                  .map(language => {
                    return language.name;
                  })
                  .join(", ")}
              </div>
            </div>
          </div>
          <BorderCountries countries={
              allCountries.filter((country) => {
                return borders.includes(country.alpha3Code);
              })
          }/>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
    return {
        allCountries: state.allCountries
    }
}

export default connect(mapStateToProps, null)(CountryDetails);
