'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Disabilitas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Disabilitas.belongsTo(models.Kategori, {
        as: 'kategori',
        foreignKey: 'kategori_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
      // Disabilitas.hasMany(models.Verifikasi_Disabilitas, {
      //   as: 'Verifikasi_Disabilitas',
      //   foreignKey: 'disabilitas_id',
      //   onDelete: 'CASCADE',
      //   onUpdate: 'CASCADE',
      // });
    }
  }
  Disabilitas.init(
    {
      name: DataTypes.STRING,
      kategori_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Disabilitas',
    }
  );

  Disabilitas.addHook('beforeValidate', (model, options) => {
    model.createdAt = new Date();
    model.updatedAt = new Date();
  });
  return Disabilitas;
};
