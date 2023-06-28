const { Activity, Country } = require("../db");
const { Op } = require("sequelize");

//LLEGA UN OBJETO POR PROPS
//CREO EN LA DB
//MAPEO EL ARRAY DE COUNTRIES Y POR CADA UNO BUSCO EN LA DB Y LO RELACIONO CON LA ACTIVIDAD(1 ACTIVIDAD PARA VARIOS PAISES)
const createActivity = async ({
  name,
  dificulty,
  season,
  country,
  duration,
}) => {
  const newActivity = await Activity.create({
    name: name,
    dificulty: dificulty,
    season: season,
    duration: duration,
  });

  country.map(async (country) => {
    const countryDB = await Country.findByPk(country);
    await newActivity.addCountry(countryDB);
  });
};

//Por lo que lei la diferencia entre set y add es que si creo una misma actividad asociada al mismo pais add lo reemplaza y set no

const getAllActivities = async () => {
  const all = await Activity.findAll();
  return all;
};

const deleteActivity = async (id) => {
  const activity = await Activity.findByPk(id);
  const identify = activity.id;
  const name = activity.name;
  const out = await Activity.destroy({
    where: {
      id: identify,
    },
  });
  return name;
};
module.exports = {
  createActivity,
  getAllActivities,
  deleteActivity,
};
