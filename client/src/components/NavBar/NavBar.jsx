import React from "react";
import style from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { useLocation } from "react-router-dom";
function NavBar() {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== "/form" && (
        <>
          <div className={style.inicio}>
            <button>
              <a href="/home">Inicio</a>
            </button>
            <button>
              <a href="/form">Crear Actividad</a>
            </button>
          </div>
          <div className={style.navBar}>
            <SearchBar />
          </div>
        </>
      )}
    </div>
  );
}

export default NavBar;
