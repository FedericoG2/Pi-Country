import React from "react";
import Card from "../Card/Card";
import style from "./Cards.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries, clear } from "../../redux/actions";
import Pagination from "../../components/Pagination/Pagination";
import messi from "../../image/messi-hi.gif";

function Cards() {
  const dispatch = useDispatch();

  const countries = useSelector((state) => state.countries);
  const advice = useSelector((state) => state.advice);
  console.log(advice);
  useEffect(() => {
    dispatch(getAllCountries());
    dispatch(clear());
  }, [dispatch]);

  //--------------------------------------------------------PAGINADO
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage, setCountriesPerPage] = useState(10); //FIJO
  const indexOfLastCountry = currentPage * countriesPerPage; //VARIA
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage; //VARIA
  const currentCountries = countries.slice(
    //VARIA
    indexOfFirstCountry,
    indexOfLastCountry
  );
  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
console.log(currentCountries)
  //----------------------------------------------------
  return (
    <>
      {advice === "No se encontro el pais" ? (
        <div>
          <h1 className={style.advice}>
            No se encuentra el pais solicitado,presione el boton para ser
            redirigido...
          </h1>
          <div className={style.messi}>
            <img className={style.img} src={messi} alt="imagen" />
            <button className={style.boton}>
              <a href="/home">Atrás</a>
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className={style.container}>
            {currentCountries.map((country, index) => {
              return (
                <div key={index}>
                  <Card
                    id={country.id}
                    name={country.name}
                    flags={country.flags}
                    continent={country.continent}
                    // poblation={country.poblation}
                  />
                </div>
              );
            })}
          </div>
          <div className={style.paginado}>
            <Pagination
              countriesPerPage={countriesPerPage} //10
              countries={countries.length} //250
              paginado={paginado} //Funcion que modifica los indices y por lo tanto el slice
            />
          </div>
        </>
      )}
    </>
  );
}

export default Cards;
