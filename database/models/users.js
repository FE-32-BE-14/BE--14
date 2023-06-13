'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Users.hasMany(models.Identitas, {
      //   as: 'Identitas',
      //   foreignKey: 'user_id',
      //   onDelete: 'CASCADE',
      //   onUpdate: 'CASCADE',
      // });
      // Users.hasMany(models.Detail_Beasiswa, {
      //   as: 'Detail_Beasiswa',
      //   foreignKey: 'user_id',
      //   onDelete: 'CASCADE',
      //   onUpdate: 'CASCADE',
      // });
      // Users.hasMany(models.Verifikasi_Disabilitas, {
      //   as: 'Verifikasi',
      //   foreignKey: 'user_id',
      //   onDelete: 'CASCADE',
      //   onUpdate: 'CASCADE',
      // });
      // Users.hasMany(models.Doc_Beasiswa, {
      //   as: 'Doc_Beasiswa',
      //   foreignKey: 'user_id',
      //   onDelete: 'CASCADE',
      //   onUpdate: 'CASCADE',
      // });
      // Users.hasMany(models.Doc_Disabilitas, {
      //   as: 'Doc_Disabilitas',
      //   foreignKey: 'user_id',
      //   onDelete: 'CASCADE',
      //   onUpdate: 'CASCADE',
      // });
      // Users.hasMany(models.Transaksi_Donasi, {
      //   as: 'Transaksi_Donasi',
      //   foreignKey: 'user_id',
      //   onDelete: 'CASCADE',
      //   onUpdate: 'CASCADE',
      // });
    }
  }
  Users.init(
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      refresh_token: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Users',
    }
  );

  Users.addHook('beforeValidate', (model, options) => {
    model.createdAt = new Date();
    model.updatedAt = new Date();
  });
  return Users;
};
