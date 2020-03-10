import React from "react";
import styles from "./styles.module.scss";

function Card({ imgUrl, countryName, population, region, capital }) {
  return (
    <div className={styles.card}>
      <img src={imgUrl} alt="Flag" />
      <div className={styles.content}>
        <div className={styles.countryName}>{countryName}</div>
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
