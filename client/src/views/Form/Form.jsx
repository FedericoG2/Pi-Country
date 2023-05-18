import React, { useState, useEffect } from "react";
import style from "./Form.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries } from "../../redux/actions";
import axios from "axios";

const Form = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.copyCountries);
  useEffect(() => {
    if (countries === 0) {
      dispatch(getAllCountries());
    }
    dispatch(getAllCountries());
  }, [dispatch, countries]);

  //-------------------------------------------------------------------ESTADOS--------------------------------
  const [form, setForm] = useState({
    name: "",
    dificulty: 0,
    duration: "",
    season: "",
    country: [],
  });
  const [error, setError] = useState({
    name: "",
    duration: "",
  });

  console.log(form);
  console.log(error);
  const [CountrySelected, setCountrySelected] = useState("Country");
  //----------------------------------------------------------------GUARDANDO Y VALIDANDO PROPIEDADES---------------------------------------------------------
  const handleChange = (e) => {
    const property = e.target.name;
    const value = e.target.value;

    setForm({
      ...form,
      [property]: value,
    });

    if (property === "name") {
      const regularExpression = /[`@#$%^&*()_+\-=[\]{};'"\\|<>/~]/;
      const numberExpression = /^([0-9])*$/;

      if (regularExpression.test(value)) {
        error.name = "El nombre no puede contener caracteres especiales!";
      } else {
        error.name = "";
      }
    }
    if (property === "duration") {
      if (value < 1) {
        error.duration = "La actividad debe durar al menos una hora";
      } else {
        error.duration = "";
      }
    }
  };

  //-----------------------------------------------------------------------------------------------------------------------------------------------------------
  const handleSelectCountry = (e) => {
    setForm({
      ...form,
      country: [...form.country, e.target.value],
    });
    setCountrySelected(e.target.value);
  };
  const handleDeleteCountry = (e) => {
    e.preventDefault();
    const deleteCountry = form.country.filter((c) => c !== e.target.value);
    setForm({
      ...form,
      country: deleteCountry,
    });
    if (e.target.value === CountrySelected) setCountrySelected("Country");
  };
  //--------------------------------------------------------------------------ENVIO DE FORMULARIO---------------------------------------------------------
  const handleSubmit = async (e) => {
    const API_URL = "http://localhost:3001";
    e.preventDefault();
    if (!form.name || !form.dificulty || !form.duration || !form.season) {
      return alert("Todos los campos son obligatorios!");
    }
    if (form.country.length < 1) {
      return alert("Selecciona al menos un pais!"); //Si se crea sin al menos un pais me relaciona la actividad con todos, cuidado !
    }
    await axios
      .post(`${API_URL}/activities`, form)
      .then((res) => alert("Actividad creada con éxito!"))
      .catch((err) => alert(err));

    setForm({
      name: "",
      dificulty: 0,
      duration: "",
      season: "",
      country: [],
    });
  };
  //-------------------------------------------------------------------------------------------------------------------------------------

  return (
    <div className={style.contenedor}>
      <button>
        <a href="/home">Atrás</a>
      </button>
      <form onSubmit={handleSubmit} className={style.formulario}>
        <h2>Nueva Actividad</h2>
        <hr></hr>

        <div>
          <label>Nombre</label>
          <input
            type="text"
            name="name"
            placeholder="..."
            value={form.name}
            onChange={handleChange}
          />
        </div>
        {error.name && <p className={style.error}>{error.name}</p>}
        <div>
          <label>Duracion (hs)</label>
          <input
            type="number"
            name="duration"
            placeholder="..."
            value={form.duration}
            onChange={handleChange}
          />
        </div>
        {error.duration && <p className={style.error}>{error.duration}</p>}
        <div>
          <label>Dificultad</label>
          <div className={style.season}>
            <label>
              1
              <input
                className={style.boton}
                type="radio"
                value="1"
                name="dificulty"
                onChange={handleChange}
              />
            </label>
            <label>
              2
              <input
                className={style.boton}
                type="radio"
                value="2"
                name="dificulty"
                onChange={handleChange}
              />
            </label>
            <label>
              3
              <input
                className={style.boton}
                type="radio"
                value="3"
                name="dificulty"
                onChange={handleChange}
              />
            </label>
            <label>
              4
              <input
                className={style.boton}
                type="radio"
                value="4"
                name="dificulty"
                onChange={handleChange}
              />
            </label>
            <label>
              5
              <input
                className={style.boton}
                type="radio"
                value="5"
                name="dificulty"
                onChange={handleChange}
              />
            </label>
          </div>
        </div>
        <div>
          <label>Temporada</label>
          <div className={style.season}>
            <label>
              Verano
              <input
                className={style.boton}
                type="radio"
                value="Summer"
                name="season"
                onChange={handleChange}
              />
            </label>
            <label>
              Otoño
              <input
                className={style.boton}
                type="radio"
                value="Autumn"
                name="season"
                onChange={handleChange}
              />
            </label>
            <label>
              Invierno
              <input
                className={style.boton}
                type="radio"
                value="Winter"
                name="season"
                onChange={handleChange}
              />
            </label>
            <label>
              Primavera
              <input
                className={style.boton}
                type="radio"
                value="Spring"
                name="season"
                onChange={handleChange}
              />
            </label>
          </div>
        </div>

        <div>
          <label>Paises </label>

          <select className={style.select} onChange={handleSelectCountry}>
            <option select disabled selected={true}>
              -
            </option>
            {countries.map((c, i) => (
              <option key={i} name="country" value={c.name}>
                {c.name}
              </option>
            ))}
          </select>

          <div>
            <>
              {form.country &&
                form.country.map((country, i) => (
                  <button
                    key={i}
                    value={country}
                    style={{
                      fontFamily: "Arial, Helvetica, sans-serif",
                      fontSize: "15px",
                      color: "black",
                      backgroundColor: "blueviolet",
                      border: "solid black",
                      width: "160px",
                      height: "30px",
                      textAlign: "center",
                      padding: "6px",
                    }}
                    onClick={handleDeleteCountry}
                  >
                    {country} (x)
                  </button>
                ))}
            </>
          </div>
        </div>

        <button type="submit">Crear</button>
      </form>
    </div>
  );
};

export default Form;
