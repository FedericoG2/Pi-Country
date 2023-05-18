import React from "react";
import Card from "../Card/Card";
import style from "./Cards.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries } from "../../redux/actions";
import Pagination from "../../components/Pagination/Pagination";

function Cards() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);
  //--------------------------------------------------------PAGINADO
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage, setCountriesPerPage] = useState(10);
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = countries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );
  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  //----------------------------------------------------
  return (
    <div>
      <div className={style.container}>
        {currentCountries.map((country, index) => {
          return (
            <div key={index}>
              <Card
                id={country.id}
                name={country.name}
                flags={country.flags}
                continent={country.continent}
              />
            </div>
          );
        })}
      </div>
      <div className={style.paginado}>
        <Pagination
          countriesPerPage={countriesPerPage}
          countries={countries.length}
          paginado={paginado}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}

export default Cards;
