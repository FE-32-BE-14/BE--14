'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kategori extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Kategori.hasMany(models.Verifikasi_Disabilitas, {
      //   as: 'Verifikasi_Disabilitas',
      //   foreignKey: 'kategori_id',
      //   onDelete: 'CASCADE',
      //   onUpdate: 'CASCADE',
      // });
      // Kategori.hasMany(models.Disabilitas, {
      //   as: 'Disabilitas',
      //   foreignKey: 'ketegori_id',
      //   onDelete: 'CASCADE',
      //   onUpdate: 'CASCADE',
      // });
    }
  }
  Kategori.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Kategori',
    }
  );

  Kategori.addHook('beforeValidate', (model, options) => {
    model.createdAt = new Date();
    model.updatedAt = new Date();
  });
  return Kategori;
};
