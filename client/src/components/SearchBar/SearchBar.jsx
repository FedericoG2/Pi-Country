import React from "react";
import style from "./SearchBar.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountryByName } from "../../redux/actions";

function SearchBar() {
  const dispatch = useDispatch();
  const [country, setCountry] = useState("");
  const onChangeHandler = (event) => {
    setCountry(event.target.value);
  };
  const functions = () => {
    dispatch(getCountryByName(country));
    setCountry("");
  };
  return (
    <div className={style.container}>
      <input
        autoComplete="off"
        className={style.input}
        type="search"
        placeholder="Search..."
        name="name"
        value={country}
        onChange={onChangeHandler}
      />
      <button onClick={() => functions()} className={style.buttons}>
        BUSCAR
      </button>
    </div>
  );
}

export default SearchBar;
