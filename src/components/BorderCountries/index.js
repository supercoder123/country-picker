import React from "react";
import styles from "./styles.module.scss";
import { useHistory } from "react-router-dom";

const BorderCountries = ({ countries }) => {
  const history = useHistory();

  function openDetails(country) {
    history.push("/details", country);
  }

  return (
    <div>
      <div className={styles.borderCountries}>
        <span className={styles.point}> Border Countries: </span>
        {
        (countries.length > 0) ? countries.map((country, index) => {
          return (
            <div
              className={styles.pill}
              onClick={() => openDetails(country)}
              key={index}
            >
              {country.name}
            </div>
          ) 
        }) : 'None'}
      </div>
    </div>
  );
};

export default BorderCountries;
