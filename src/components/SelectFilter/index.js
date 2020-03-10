import React, { useState, useRef } from "react";
import styles from "./styles.module.scss";
import cx from 'classnames';

const SelectFilter = ({fetchCountriesByRegion}) => {
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Filter By Region');
  const regionList = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];
  const selectRef = useRef(null);

  document.addEventListener('click', (e) => {
    if (e.target !== selectRef.current) {
        setOpen(false);
    }
  });

  return (
    <div className={styles.dropdownContainer}>
      <div ref={selectRef} className={styles.dropdown}
        onClick={() => {
          setOpen(!open);
        }}
      >
        {selectedOption}
        <i className={cx('fa', {'fa-caret-down': !open}, {'fa-caret-up': open})}></i>
      </div>
      {open && (
        <div className={styles.dropdownMenu}>
          {regionList.map((region, index) => {
            return <div onClick={() => {
                setSelectedOption(region);
                fetchCountriesByRegion(region);
            }} className={styles.dropdownMenuItem} key={index}>{region}</div>;
          })}
        </div>
      )}
    </div>
  );
};

export default SelectFilter;
