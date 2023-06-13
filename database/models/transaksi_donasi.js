'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaksi_Donasi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //   // define association here
      Transaksi_Donasi.belongsTo(models.Users, {
        as: 'users',
        foreignKey: 'user_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
      Transaksi_Donasi.belongsTo(models.Donasi, {
        as: 'donasi',
        foreignKey: 'donasi_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }
  Transaksi_Donasi.init(
    {
      donasi_id: DataTypes.INTEGER,
      no_va: DataTypes.STRING,
      status: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Transaksi_Donasi',
    }
  );

  Transaksi_Donasi.addHook('beforeValidate', (model, options) => {
    model.createdAt = new Date();
    model.updatedAt = new Date();
  });
  return Transaksi_Donasi;
};
