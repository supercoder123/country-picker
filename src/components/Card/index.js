import React from "react";
import styles from "./styles.module.scss";
import { useHistory } from "react-router-dom";
import cx from 'classnames';

function Card({ country }) {
  const { flag, name, population, region, capital } = country;
  const history = useHistory();

  function openDetails() {
    history.push('/details', country);
  }
  
  return (
    <div onClick={() => openDetails()} className={cx(styles.card, styles.transition)}>
      <img src={flag} alt="Flag" />
      <div className={styles.content}>
        <div className={styles.countryName}>{name}</div>
        <div>
          <span className={styles.label}>Population:</span> {population}
        </div>
        <div>
          <span className={styles.label}>Region:</span> {region}
        </div>
        <div>
          <span className={styles.label}>Capital:</span> {capital}
        </div>
      </div>
    </div>
  );
}

export default Card;
