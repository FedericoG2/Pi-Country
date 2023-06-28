import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCountryById } from "../../redux/actions";
import style from "./Detail.module.css";
import DetailCard from "../../components/DetailCard/DetailCard";
import ActivityCard from "../../components/ActivityCard/ActivityCard";
import Footer from "../../components/Footer/Footer";

function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  // cada vez que el id cambie se despacha la accion
  useEffect(() => {
    dispatch(getCountryById(id));
  }, [dispatch, id]);
  const detail = useSelector((state) => state.detail);
  

  return (
    <>
      <div className={style.image}>
        <img src={detail.flags} alt="img not found" />
      </div>

      <div className={style.container}>
        <DetailCard
          name={detail.name}
          continent={detail.continent}
          capital={detail.capital}
          population={detail.population}
          area={detail.area}
          subregion={detail.subregion}
          id={detail.id}
        />
        {detail.Activities &&
          detail.Activities.map((a, index) => {
            return (
              <div key={index}>
                <ActivityCard
                  name={a.name}
                  season={a.season}
                  duration={a.duration}
                  dificulty={a.dificulty}
                  id={a.id}
                />
              </div>
            );
          })}
      </div>
      <Footer />
    </>
  );
}

export default Detail;
