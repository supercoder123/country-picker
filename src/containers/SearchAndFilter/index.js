import React from 'react';
import SearchBox from '../../components/SearchBox';
import styles from './styles.module.scss';
import { connect } from 'react-redux';
import { searchCountries, fetchCountriesByRegion } from '../../actions';
import SelectFilter from '../../components/SelectFilter';

const SearchAndFilter = ({searchCountries, fetchCountriesByRegion}) => {
    return (
        <div className={styles.container}>
            <SearchBox searchCountries={searchCountries} />
            <SelectFilter fetchCountriesByRegion={fetchCountriesByRegion} />
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchCountries: (searchTerm) => dispatch(searchCountries(searchTerm)),
        fetchCountriesByRegion: (region) => dispatch(fetchCountriesByRegion(region))
    }
}

export default connect(null, mapDispatchToProps)(SearchAndFilter);
