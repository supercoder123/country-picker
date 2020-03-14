import React from "react";
import styles from "./styles.module.scss";

function Header({toggleTheme, theme}) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Where in the world?</div>
      <button type="button" onClick={() => toggleTheme()} className={styles.themeButton}>
        <i className="fa fas fa-moon"></i>
        <div><span className={styles.themeName}>{ theme === 'dark' ? 'light' : 'dark'}</span> Mode</div>
      </button>
    </div>
  );
}

export default Header;
