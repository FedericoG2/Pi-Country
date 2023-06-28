import React from "react";
import style from "./Detail.module.css";

function DetailCard({
  name,
  continent,
  capital,
  population,
  area,
  subregion,
  id,
}) {
  return (
    <div className={style.celda}>
      <div className={style.box}>
        <div className={style.info}>
          <div className={style.titulo}>
            <h2>{name} </h2>
          </div>
          <hr></hr>
          <h3>Continente: {continent} </h3>
          <h3>Capital: {capital} </h3>
          <h3>Cantidad de Hab. : {population}</h3>
          <h3>Area: {area ? area : "Sin datos"} </h3>
          <h3>Codigo: {id} </h3>
          <h3>Subregion : {subregion ? subregion : "Sin datos"}</h3>
        </div>
      </div>
    </div>
  );
}

export default DetailCard;
