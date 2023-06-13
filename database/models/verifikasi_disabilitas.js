'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Verifikasi_Disabilitas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Verifikasi_Disabilitas.belongsTo(models.Users, {
        as: 'users',
        foreignKey: 'user_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
      Verifikasi_Disabilitas.belongsTo(models.Kategori, {
        as: 'kategori',
        foreignKey: 'kategori_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
      Verifikasi_Disabilitas.belongsTo(models.Disabilitas, {
        as: 'disabilitas',
        foreignKey: 'disabilitas_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }
  Verifikasi_Disabilitas.init(
    {
      user_id: DataTypes.INTEGER,
      status_disabilitas: DataTypes.STRING,
      kategori_id: DataTypes.INTEGER,
      disabilitas_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Verifikasi_Disabilitas',
    }
  );

  Verifikasi_Disabilitas.addHook('beforeValidate', (model, options) => {
    model.createdAt = new Date();
    model.updatedAt = new Date();
  });
  return Verifikasi_Disabilitas;
};
