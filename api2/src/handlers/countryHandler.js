//BUSCA POR ID

const { getCountryById } = require("../controllers/countriesController");

const getCountryId = async (req, res) => {
  const { id } = req.params;

  try {
    const countryById = await getCountryById(id);
    res.status(200).json(countryById);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getCountryId,
};
