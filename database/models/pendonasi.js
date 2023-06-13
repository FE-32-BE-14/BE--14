'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pendonasi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pendonasi.init(
    {
      name: DataTypes.STRING,
      no_telp: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Pendonasi',
    }
  );

  Pendonasi.addHook('beforeValidate', (model, options) => {
    model.createdAt = new Date();
    model.updatedAt = new Date();
  });
  return Pendonasi;
};
