import React from "react";
import { Link } from "react-router-dom";
import style from "./Landing.module.css";

function Landing() {
  return (
    <div className={style.imagen}>
      <div className={style.contenedor}>
        <div className={style.countryLogo}>
          <div className={style.contenedorLogo}>
            <div>
              <p className={style.country}>PI-COUNTRY</p>
            </div>
          </div>
          <div className={style.descripcion}>
            <p>
              "Explore el mundo y descubra la diversidad de cada país,
              información detallada, banderas y mucho más."
              <hr></hr>
            </p>
          </div>
        </div>
        <div className={style.home}>
          <Link to="/home">
            <button className={style.button}>INICIO</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;
