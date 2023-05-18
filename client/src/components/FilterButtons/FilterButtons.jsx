import React, { useEffect } from "react";
import style from "./Filter.module.css";
import {
  getCountriesAlphabetic,
  getCountriesPopulation,
  getCountriesContinent,
  getActivities,
  getCountriesActivities,
} from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

function FilterButton() {
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activities);
  console.log(activities);

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
  }, []);

  return (
    <div className={style.container}>
      <select className={style.selects} onChange={countriesOrderAlphabetic}>
        <option select disabled selected={true}>
          A-Z
        </option>
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </select>
      <select className={style.selects} onChange={countriesOrderPopulation}>
        <option select disabled selected={true}>
          Poblacion
        </option>
        <option value="asc">Ascendente</option>
        <option value="desc">Descendente</option>
      </select>
      <select className={style.selects} onChange={countriesOrderContinent}>
        <option select disabled selected={true}>
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
      <select className={style.selects} onChange={countriesOrderActivities}>
        <option select disabled selected={true}>
          Actividad
        </option>
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
