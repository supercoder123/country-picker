import { FETCH_COUNTRIES, SET_LOADING, SEARCH_FOR_COUNTRIES, SET_FILTER} from '../actions/consts';

const initialState = {
    theme: 'Dark',
    searchTerm: '',
    filter: '',
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
        case SEARCH_FOR_COUNTRIES:
            return {
                ...state,
                searchTerm: action.payload.toLowerCase(),
                searchResults: state.allCountries.filter(country => {
                    return country.name.toLowerCase().includes(action.payload.toLowerCase());
                })
            }
        case SET_FILTER:
            return {
                ...state,
                filter: action.payload.region,
                allCountries: action.payload.res,
                searchResults: action.payload.res
            }
            default:
                return state;
    }
}
export default countryReducer;