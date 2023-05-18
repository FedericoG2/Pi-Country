import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCountryById } from "../../redux/actions";
import style from "./Detail.module.css";
import DetailCard from "../../components/DetailCard/DetailCard";
import ActivityCard from "../../components/ActivityCard/ActivityCard";

function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  // cada vez que el id cambie se cambia el estado global de detail
  useEffect(() => {
    dispatch(getCountryById(id));
  }, [dispatch, id]);
  const detail = useSelector((state) => state.detail);
  console.log(detail);

  return (
    <div>
      <div className={style.container}>
        <img className={style.image} src={detail.flags} alt="img not found" />
        <div className={style.content}>
          <div className={style.info}>
            <DetailCard
              name={detail.name}
              continent={detail.continent}
              capital={detail.capital}
              population={detail.population}
              area={detail.area}
              subregion={detail.subregion}
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
                    />
                  </div>
                );
              })}
          </div>
        </div>
        ;
      </div>
    </div>
  );
}

export default Detail;
