const validatorMiddleware = (req, res, next) => {
  const { name, dificulty, season, country, duration } = req.body;
  if (!name) return res.status(400).json({ error: "Falta un nombre" });
  if (!dificulty)
    return res.status(400).json({ error: "Falta una dificultad" });
  if (!duration) return res.status(400).json({ error: "Falta una duracion" });
  if (!season) return res.status(400).json({ error: "Falta una temporada" });
  if (!country.length)
    //0 en booleano es false
    return res.status(400).json({ error: "Falta un Pais" });
  next();
};

module.exports = { validatorMiddleware };
