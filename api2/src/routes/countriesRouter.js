const { Router } = require("express");

const countriesRouter = Router();
const { getCountries } = require("../handlers/countriesHandler");
const { getCountryId } = require("../handlers/countryHandler");
//Obtiene todos los paises o por name si hay query
countriesRouter.get("/", getCountries);
//Obtiene un pais en especifico por pasado por id
countriesRouter.get("/:id", getCountryId);

module.exports = countriesRouter;
