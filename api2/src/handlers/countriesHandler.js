//BUSCA TODOS O POR NAME
const { getAllCountries } = require("../controllers/countriesController");

const getCountries = async (req, res) => {
  const { name } = req.query;
  try {
    const countries = await getAllCountries(name);
    res.status(200).json(countries);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getCountries,
};
