import React from 'react';
import SearchBox from '../../components/SearchBox';
import styles from './styles.module.scss';
import { connect } from 'react-redux';
import { searchCountries, fetchCountriesByRegion, setSearchTerm } from '../../actions';
import SelectFilter from '../../components/SelectFilter';

const SearchAndFilter = ({searchCountries, fetchCountriesByRegion, setSearchTerm, searchTerm, filter}) => {
    return (
        <div className={styles.container}>
            <SearchBox searchTerm={searchTerm} searchCountries={searchCountries} setSearchTerm={setSearchTerm}/>
            <SelectFilter filter={filter} fetchCountriesByRegion={fetchCountriesByRegion} />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        searchTerm: state.searchTerm,
        filter: state.filter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchCountries: () => dispatch(searchCountries()),
        setSearchTerm: (searchTerm) => dispatch(setSearchTerm(searchTerm)),
        fetchCountriesByRegion: (region) => dispatch(fetchCountriesByRegion(region))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchAndFilter);
