import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Card.module.css";

function Card({ id, name, flags, continent }) {
  return (
    <div>
      <NavLink to={`/detail/${id}`}>
        <div className={style.celda}>
          <div className={style.img}>
            <img className={style.img} src={flags} alt="img not found" />
          </div>
          <div className={style.box}>
            <div className={style.info}>
              <h2>{name} </h2>
              <p>{continent} </p>
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
}

export default Card;
