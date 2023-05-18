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

const initialState = {
  countries: [],
  copyCountries: [],
  detail: [],
  activities: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        copyCountries: action.payload,
      };

    case GET_COUNTRY_NAME:
      return {
        ...state,
        countries: action.payload,
      };

    case GET_COUNTRY_ID:
      return {
        ...state,
        detail: action.payload,
      };
    case SORT:
      if (action.payload === "asc") {
        return {
          ...state,
          countries: [
            ...state.countries.sort((a, b) => a.name.localeCompare(b.name)), // String.prototype.localeCompare() que permite comprarar dos cadenas teniendo en cuenta acentos y otras características específicas de cada idioma para la ordenación. Lo mejor de todo, es que esta función devuelve -1, 1 o 0 según si es mayor, menor o igual,
          ],
        };
      } else {
        return {
          ...state,
          countries: [
            ...state.countries.sort((a, b) => b.name.localeCompare(a.name)),
          ],
        };
      }
    case SORT_POPULATION:
      if (action.payload === "asc") {
        return {
          ...state,
          countries: [
            ...state.countries.sort((a, b) => a.population - b.population),
          ],
        };
      } else {
        return {
          ...state,
          countries: [
            ...state.countries.sort((a, b) => b.population - a.population),
          ],
        };
      }
    case SORT_CONTINENT:
      return {
        ...state,
        countries: [
          ...state.copyCountries.filter((c) => c.continent === action.payload),
        ],
      };
    case GET_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
      };
    case SORT_ACTIVITY:
      let mapeoCountries =
        action.payload === "todos"
          ? state.copyCountries
          : state.copyCountries.filter((c) => {
              let mapeo = c.Activities?.map((d) => d.name);
              if (mapeo.includes(action.payload)) {
                return c;
              }
            });
      return {
        ...state,
        countries: mapeoCountries,
      };

    default:
      return { ...state };
  }
};

export default reducer;
