import React from 'react';
import styles from './styles.module.scss';

const SearchBox = ({searchCountries}) => {
    
    return (
        <div className={styles.search}>
            <i className="fa fa-search" style={{color: '#ddd', padding: '15px 28px'}}></i>
            <input type="text" placeholder="Search for a country" onChange={(e) => searchCountries(e.target.value)}/>
        </div>
    );
}

export default SearchBox;
