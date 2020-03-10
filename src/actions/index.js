import {
  FETCH_COUNTRIES,
  SET_LOADING,
  SET_SEARCH_RESULTS,
  SET_FILTER,
  SET_SEARCH_TERM,
  SET_ALL_COUNTRIES
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
    payload: filter
  };
}

export function setSearchTerm(term) {
  return {
    type:  SET_SEARCH_TERM,
    payload: term
  }
}

export function setAllCountries(countries) {
  return {
    type:  SET_ALL_COUNTRIES,
    payload: countries
  }
}

export function searchCountries() {
  return {
    type: SET_SEARCH_RESULTS,
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
          dispatch(setFilter(region));
          dispatch(setAllCountries(res.data))
          dispatch(searchCountries())
          dispatch(setLoading(false));
        });
    } else {
      dispatch(setLoading(true));
      axios.get("https://restcountries.eu/rest/v2/all").then(function(res) {
        dispatch(setFilter(region));
        dispatch(setAllCountries(res.data))
        dispatch(searchCountries())
        dispatch(setLoading(false));
      });
    }
  };
}
