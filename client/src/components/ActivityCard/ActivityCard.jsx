import React from "react";
import style from "./Activity.module.css";

function ActivityCard({ name, dificulty, duration, season }) {
  return (
    <div>
      <div className={style.celda}>
        <div className={style.box}>
          <div className={style.info}>
            <div className={style.titulo}>
              <h2>{name}</h2>
            </div>
            <h3>Estacion: {season} </h3>
            <h3>Duracion: {duration}hs </h3>
            <h3>Nivel de dificultad : {dificulty}</h3>
            <button>X</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActivityCard;
