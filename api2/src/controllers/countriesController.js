const { Country, Activity } = require("../db");
const axios = require("axios");
const { Op } = require("sequelize");

//-- 1 MAPEO Y TRAIGO DE LA API
// --2 lO GUARDO EN LA BASE DE DATOS

const getCountryInfo = async () => {
  let apiInfo = await axios.get("https://rest-countries.up.railway.app/v3/all");
  let apiCountries = apiInfo.data.map((country) => {
    return {
      id: country.cca3,
      name: country.name.common,
      flags: country.flags ? country.flags[1] : "Not image found",
      continent: country.continents[0],
      capital: country.capital ? country.capital[0] : "Sin Datos",
      subregion: country.subregion ? country.subregion : "Sin datos",
      area: country.area,
      population: country.population,
    };
  });
  apiCountries.forEach((e) => {
    Country.findOrCreate({
      where: {
        id: e.id,
        name: e.name,
        flags: e.flags,
        continent: e.continent,
        capital: e.capital,
        subregion: e.subregion,
        area: e.area,
        population: e.population,
      },
    });
  });
};
////////////////////////////////////

//--1 TRAIGO DE LA BASE DE DATOS , ME FIJO ANTES SI HAY DATOS

const getCountryBD = async () => {
  const rows = await Country.count();
  if (rows > 0) {
    const countries = await Country.findAll({
      include: {
        model: Activity,
        through: {
          attributes: [],
        },
      },
    });
    return countries;
  } else {
    await getCountryInfo();
    const countrie = await Country.findAll({
      include: {
        model: Activity,
        through: {
          attributes: [],
        },
      },
    });
    return countrie;
  }
};

//-- 1 BUSCO POR NAME EN LA BASE DE DATOS

const getCountryByName = async (name) => {
  const countryName = await Country.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
  });

  if (countryName.length > 0) {
    return countryName;
  } else {
    return "No se encontro el pais";
  }
};

//-- 1 BUSCO POR ID (LO QUE ME PASAN A MAYUS.)INCLUYO LA RELACION CON EL OTRO MODELO

const getCountryById = async (id) => {
  const iD = id.toUpperCase(); // convierte en mayusculas
  const detailCountrie = await Country.findOne({
    

    where: {
      id: iD,
    },
    include: {
      model: Activity,
      through: {
        attributes: [],
      },
    },
  });

  return detailCountrie;
};

//------DEFINE SI TRAE TODOS O POR NAME

const getAllCountries = async (name) => {
  if (!name) {
    const all = await getCountryBD();
    return all;
  } else {
    const byName = await getCountryByName(name);
    return byName;
  }
};

module.exports = {
  getAllCountries,
  getCountryById,
};
