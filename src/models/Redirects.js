'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Redirects extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Redirects.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      shortUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      longUrl: {
        type: DataTypes.STRING(2048),
        allowNull: false,
      },
      clicks: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Redirects',
    }
  );
  return Redirects;
};
