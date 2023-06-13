'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Identitas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Identitas.belongsTo(models.Users, {
        as: 'users',
        foreignKey: 'user_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
      Identitas.belongsTo(models.Agama, {
        as: 'agama',
        foreignKey: 'agama_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }
  Identitas.init(
    {
      user_id: DataTypes.INTEGER,
      name_lengkap: DataTypes.STRING,
      tempat_lhr: DataTypes.STRING,
      tanggal_lhr: DataTypes.DATE,
      jenis_kelamin: DataTypes.STRING,
      no_nik: DataTypes.STRING,
      no_kk: DataTypes.STRING,
      agama_id: DataTypes.INTEGER,
      provinsi: DataTypes.INTEGER,
      kabupaten: DataTypes.INTEGER,
      kecamatan: DataTypes.INTEGER,
      desa: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Identitas',
    }
  );

  Identitas.addHook('beforeValidate', (model, options) => {
    model.createdAt = new Date();
    model.updatedAt = new Date();
  });
  return Identitas;
};
