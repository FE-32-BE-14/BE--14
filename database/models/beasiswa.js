'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Beasiswa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Beasiswa.hasMany(models.Detail_Beasiswa, {
      //   as: 'Detail_Beasiswa',
      //   foreignKey: 'beasiswa_id',
      //   onDelete: 'CASCADE',
      //   onUpdate: 'CASCADE',
      // });
    }
  }
  Beasiswa.init(
    {
      name: DataTypes.STRING,
      deskripsi: DataTypes.TEXT,
      img: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Beasiswa',
    }
  );

  Beasiswa.addHook('beforeValidate', (model, options) => {
    model.createdAt = new Date();
    model.updatedAt = new Date();
  });
  return Beasiswa;
};
