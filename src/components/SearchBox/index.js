import React from 'react';
import styles from './styles.module.scss';

const SearchBox = ({searchCountries, setSearchTerm, searchTerm}) => {
    return (
        <div className={styles.search}>
            <i className="fa fa-search" style={{color: '#ddd', padding: '15px 28px'}}></i>
            <input value={searchTerm} type="text" placeholder="Search for a country" onChange={(e) => {
                setSearchTerm(e.target.value);
                searchCountries();
            }}/>
        </div>
    );
}

export default SearchBox;
