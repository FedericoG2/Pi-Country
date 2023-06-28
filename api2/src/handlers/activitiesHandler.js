const { createActivity } = require("../controllers/activitiesController");
const {
  getAllActivities,
  deleteActivity,
} = require("../controllers/activitiesController");

const getActivities = async (req, res) => {
  try {
    const allActivities = await getAllActivities();
    res.status(200).json(allActivities);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const postActivity = async (req, res) => {
  const { name, dificulty, season, country, duration } = req.body;

  try {
    const newActivity = await createActivity({
      name,
      dificulty,
      season,
      country,
      duration,
    });
    res.status(201).json("Actividad creada con exito");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteActivitie = async (req, res) => {
  const { id } = req.params;

  try {
    const deleteById = await deleteActivity(id);
    res.status(200).json("Actividad ´" + deleteById + "´ borrada!");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getActivities,
  postActivity,
  deleteActivitie,
};
