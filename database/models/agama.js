'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Agama extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Agama.hasMany(models.Identitas, {
        as: 'identitas',
        foreignKey: 'agama_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }
  Agama.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Agama',
    }
  );

  Agama.addHook('beforeValidate', (model, options) => {
    model.createdAt = new Date();
    model.updatedAt = new Date();
  });
  return Agama;
};
