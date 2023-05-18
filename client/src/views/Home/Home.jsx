import React from "react";
import FilterButtons from "../../components/FilterButtons/FilterButtons";
import Cards from "../../components/Cards/Cards";
import style from "./Home.module.css";

function Home() {
  return (
    <div className={style.home}>
      <FilterButtons />
      <div className={style.cards}>
        <Cards />
      </div>
    </div>
  );
}

export default Home;
