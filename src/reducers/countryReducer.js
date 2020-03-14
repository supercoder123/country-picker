import { FETCH_COUNTRIES, SET_LOADING, SET_SEARCH_RESULTS, SET_FILTER, SET_SEARCH_TERM, SET_ALL_COUNTRIES} from '../actions/consts';

const initialState = {
    theme: 'Light',
    searchTerm: '',
    filter: 'Filter By Region',
    allCountries: [],
    countryListWithCodes: [],
    countriesFilteredByRegion: [],
    searchResults: [],
    loading: false
}

function countryReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_COUNTRIES:
            return {
                ...state,
                allCountries: action.payload,
                searchResults: action.payload
            };
        case SET_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case SET_SEARCH_TERM: 
            return {
                ...state,
                searchTerm: action.payload.toLowerCase(),
            }
        case SET_SEARCH_RESULTS:
            return {
                ...state,
                searchResults: state.allCountries.filter(country => {
                    return country.name.toLowerCase().includes(state.searchTerm);
                })
            }
        case SET_FILTER:
            return {
                ...state,
                filter: action.payload,
            }
        case SET_ALL_COUNTRIES:
            return {
                ...state,
                allCountries: action.payload
            }
            default:
                return state;
    }
}
export default countryReducer;