import axios from "axios";
import {
  GET_ALL_COUNTRIES,
  GET_COUNTRY_NAME,
  GET_COUNTRY_ID,
  SORT,
  SORT_POPULATION,
  SORT_CONTINENT,
  SORT_ACTIVITY,
  GET_ACTIVITIES,
} from "./actionsTypes";
const API_URL = "http://localhost:3001";

// action traer todos los juegos
export const getAllCountries = () => {
  return async function (dispatch) {
    const response = await axios.get(`${API_URL}/countries`);
    const data = response.data;
    dispatch({ type: GET_ALL_COUNTRIES, payload: data });
  };
};

export const getCountryByName = (name) => {
  return async function (dispatch) {
    const response = await axios.get(`${API_URL}/countries?name=${name}`);
    const data = response.data;
    return dispatch({ type: GET_COUNTRY_NAME, payload: data });
  };
};

export const getCountryById = (id) => {
  return async function (dispatch) {
    const response = await axios.get(`${API_URL}/countries/${id}`);
    const data = response.data;
    dispatch({ type: GET_COUNTRY_ID, payload: data });
  };
};
export const getActivities = () => {
  return async function (dispatch) {
    const response = await axios.get(`${API_URL}/activities`);
    const data = response.data;
    dispatch({ type: GET_ACTIVITIES, payload: data });
  };
};
//----------------------------------------------Filtros
export const getCountriesAlphabetic = (value) => {
  return { type: SORT, payload: value };
};
export const getCountriesPopulation = (value) => {
  return { type: SORT_POPULATION, payload: value };
};
export const getCountriesContinent = (value) => {
  return { type: SORT_CONTINENT, payload: value };
};
export const getCountriesActivities = (value) => {
  return { type: SORT_ACTIVITY, payload: value };
};

