import {
  GET_ALL_COUNTRIES,
  GET_COUNTRY_NAME,
  GET_COUNTRY_ID,
  SORT,
  SORT_POPULATION,
  SORT_CONTINENT,
  SORT_ACTIVITY,
  GET_ACTIVITIES,
  CLEAR_DETAIL,
} from "./actionsTypes";

const initialState = {
  countries: [],
  copyCountries: [],
  all: [],
  flag: "",
  detail: [],
  activities: [],
  advice: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        copyCountries: action.payload,
        all: action.payload,
      };

    case GET_COUNTRY_NAME:
      return {
        ...state,
        countries:[...action.payload],
        copyCountries: [...action.payload],
        advice: action.payload,
        flag: "Fui modificado",
      };

    case GET_COUNTRY_ID:
      return {
        ...state,
        detail: action.payload,
      };
    case CLEAR_DETAIL:
      return {
        ...state,
        detail: [],
      };
    case SORT:
      if (action.payload === "asc") {
        let a = state.copyCountries.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        return {
          ...state,
          countries: [...a],
          copyCountries: [...a],
          flag: "Fui modificado",
          // String.prototype.localeCompare() que permite comprarar dos cadenas teniendo en cuenta acentos y otras características específicas de cada idioma para la ordenación. Lo mejor de todo, es que esta función devuelve -1, 1 o 0 según si es mayor, menor o igual,
        };
      } else {
        let b = state.copyCountries.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
        return {
          ...state,
          countries: [...b],
          copyCountries: [...b],
          flag: "Fui modificado",
        };
      }
    case SORT_POPULATION:
      if (action.payload === "asc") {
        let a = state.copyCountries.sort((a, b) => a.population - b.population);
        return {
          ...state,
          countries: [...a],
          copyCountries: [...a],
          flag: "Fui modificado",
        };
      } else {
        let b = state.copyCountries.sort((a, b) => b.population - a.population);
        return {
          ...state,
          countries: [...b],
          copyCountries: [...b],
          flag: "Fui modificado",
        };
      }
    case SORT_CONTINENT:
      let a = state.copyCountries.filter((c) => c.continent === action.payload);
      const b = state.all.filter((c) => c.continent === action.payload);
      if (a.length === 0) {
        return {
          ...state,
          countries: [...b],
          copyCountries: [...b],
          flag: "Fui modificado",
        };
      } else {
        return {
          ...state,
          countries: [...a],
          copyCountries: [...a],
          flag: "Fui modificado",
        };
      }

    case GET_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
      };
    case SORT_ACTIVITY:
      let mapeoCountries =
        action.payload === "todos"
          ? state.flag === "Fui modificado" //Si ya hay una copia ej sudamerica quiero todos los que tienen actividad de sudamrica y no todos en general
            ? state.copyCountries.filter((c) => {
                return c.Activities.length > 0;
              })
            : state.all.filter((c) => {
                return c.Activities.length > 0; //Si es como primer filtro trae todos los q tienen actividad sin previo filtro
              })
          : state.all.filter((c) => {
              let mapeo = c.Activities?.map((d) => d.name);
              if (mapeo.includes(action.payload)) {
                return c;
              }
            });
      return {
        ...state,
        countries: [...mapeoCountries],
        copyCountries: [...mapeoCountries],
      };

    default:
      return { ...state };
  }
};

export default reducer;
