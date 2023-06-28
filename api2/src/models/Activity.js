const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Activity",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dificulty: {
        type: DataTypes.ENUM("1", "2", "3", "4", "5"), //unicamente se pueden almacenar los valores que se encuentran aca
        allowNull: false,
      },
      duration: {
        type: DataTypes.TIME,
      },
      season: {
        type: DataTypes.ENUM("Summer", "Autumn", "Winter", "Spring"),
        allowNull: false,
      },
    },
    { freezeTableName: true, timestamps: false }
  );
};
