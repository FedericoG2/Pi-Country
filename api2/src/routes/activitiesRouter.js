const { Router } = require("express");

const activitiesRouter = Router();

const {
  postActivity,
  deleteActivitie,
  getActivities,
} = require("../handlers/activitiesHandler");

const { validatorMiddleware } = require("../middlewares/index");

activitiesRouter.get("/", getActivities);
activitiesRouter.post("/", validatorMiddleware, postActivity);
activitiesRouter.delete("/:id", deleteActivitie);

module.exports = activitiesRouter;
