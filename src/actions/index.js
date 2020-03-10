import {
  FETCH_COUNTRIES,
  SET_LOADING,
  SEARCH_FOR_COUNTRIES,
  SET_FILTER
} from "./consts";
import axios from "axios";

function fetchCountries(countries) {
  return {
    type: FETCH_COUNTRIES,
    payload: countries
  };
}

function setLoading(isLoading) {
  return {
    type: SET_LOADING,
    payload: isLoading
  };
}

function setFilter(filter) {
  return {
    type: SET_FILTER,
    payload: {
      region: filter.region,
      res: filter.res
    }
  };
}

export function searchCountries(searchTerm) {
  return {
    type: SEARCH_FOR_COUNTRIES,
    payload: searchTerm
  };
}

export function getCountries() {
  return dispatch => {
    dispatch(setLoading(true));
    axios.get("https://restcountries.eu/rest/v2/all").then(function(res) {
      dispatch(fetchCountries(res.data));
      dispatch(setLoading(false));
    });
  };
}

export function fetchCountriesByRegion(region) {
  return dispatch => {
    if (region !== "All") {
      dispatch(setLoading(true));
      axios
        .get(`https://restcountries.eu/rest/v2/region/${region}`)
        .then(function(res) {
          dispatch(setFilter({ region: region, res: res.data }));
          dispatch(setLoading(false));
        });
    } else {
      dispatch(setLoading(true));
      axios.get("https://restcountries.eu/rest/v2/all").then(function(res) {
        dispatch(setFilter({ region: region, res: res.data }));
        dispatch(setLoading(false));
      });
    }
  };
}
