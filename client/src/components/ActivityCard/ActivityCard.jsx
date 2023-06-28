import React from "react";
import style from "./Activity.module.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

function ActivityCard({ name, dificulty, duration, season, id }) {
  const history = useHistory();
  const deleteActivity = async (e) => {
    const API_URL = "http://localhost:3001";
    await axios
      .delete(`${API_URL}/activities/${id}`)
      .then((res) => alert(` ${name} eliminada con éxito!`))
      .catch((err) => alert(err));

    history.goBack(`/home`);
  };
  return (
    <div>
      <div className={style.celda}>
        <div>
          <button onClick={deleteActivity} className={style.boton}>
            X
          </button>
        </div>

        <div className={style.box}>
          <div className={style.info}>
            <div className={style.titulo}>
              <h2>{name}</h2>
            </div>
            <h3>Estacion: {season} </h3>
            <h3>Duracion: {duration} hs </h3>
            <h3>Nivel de dificultad : {dificulty}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActivityCard;
