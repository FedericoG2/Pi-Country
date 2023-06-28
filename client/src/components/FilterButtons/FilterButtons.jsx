import React, { useEffect } from "react";
import style from "./Filter.module.css";
import {
  getCountriesAlphabetic,
  getCountriesPopulation,
  getCountriesContinent,
  getActivities,
  getCountriesActivities,
  getAllCountries,
} from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

function FilterButton() {
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activities);

  const reload = () => {
    dispatch(getAllCountries());
  };

  const countriesOrderAlphabetic = (event) => {
    dispatch(getCountriesAlphabetic(event.target.value));
  };
  const countriesOrderPopulation = (event) => {
    dispatch(getCountriesPopulation(event.target.value));
  };
  const countriesOrderContinent = (event) => {
    dispatch(getCountriesContinent(event.target.value));
  };
  const countriesOrderActivities = (event) => {
    dispatch(getCountriesActivities(event.target.value));
  };

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  return (
    <div className={style.container}>
      <div>
        <button
          style={{
            fontFamily: "Arial, Helvetica, sans-serif",
            fontSize: "15px",
            color: "black",
            backgroundColor: "white",

            border: "solid black",
            width: "160px",
            height: "30px",
            textAlign: "center",
            padding: "6px",
          }}
          onClick={reload}
        >
          Recargar
        </button>
      </div>

      <select
        defaultValue="Orden"
        className={style.selects}
        onChange={countriesOrderAlphabetic}
      >
        <option disabled value="Orden">
          Orden
        </option>
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </select>
      <select
        defaultValue="Poblacion"
        className={style.selects}
        onChange={countriesOrderPopulation}
      >
        <option disabled value="Poblacion">
          Poblacion
        </option>
        <option value="asc">Ascendente</option>
        <option value="desc">Descendente</option>
      </select>
      <select
        defaultValue="Continente"
        className={style.selects}
        onChange={countriesOrderContinent}
      >
        <option disabled value="Continente">
          Continente
        </option>
        <option value="Africa">Africa</option>
        <option value="South America">South America</option>
        <option value="Antarctica">Antarctica</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="North America">North America</option>
        <option value="Oceania">Oceania</option>
      </select>
      <select
        defaultValue="Actividad"
        className={style.selects}
        onChange={countriesOrderActivities}
      >
        <option disabled value="Actividad">
          Actividad
        </option>
        <option value="todos">Tienen Actividad</option>
        {activities &&
          activities.map((a, i) => {
            return (
              <option value={a.name} key={i}>
                {a.name}
              </option>
            );
          })}
      </select>
    </div>
  );
}

export default FilterButton;
