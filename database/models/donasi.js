'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Donasi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Donasi.belongsTo(models.Pendonasi, {
        as: 'pendonasi',
        foreignKey: 'pendonasi_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
      Donasi.belongsTo(models.Tujuan_Donasi, {
        as: 'tujuan_donasi',
        foreignKey: 'tujuan_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }
  Donasi.init(
    {
      pendonasi_id: DataTypes.INTEGER,
      tujuan_id: DataTypes.INTEGER,
      nominal: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Donasi',
    }
  );

  Donasi.addHook('beforeValidate', (model, options) => {
    model.createdAt = new Date();
    model.updatedAt = new Date();
  });
  return Donasi;
};
