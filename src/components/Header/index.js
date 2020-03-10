import React from "react";
import styles from "./styles.module.scss";

function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>Where in the world?</div>
      <button type="button" className={styles.themeButton}>
        <i className="far fa-moon"></i>
        <div>Dark Mode</div>
      </button>
    </div>
  );
}

export default Header;
