'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Detail_Beasiswa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Detail_Beasiswa.belongsTo(models.Beasiswa, {
        as: 'beasiswa',
        foreignKey: 'beasiswa_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
      Detail_Beasiswa.belongsTo(models.Users, {
        as: 'users',
        foreignKey: 'user_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }
  Detail_Beasiswa.init(
    {
      beasiswa_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Detail_Beasiswa',
    }
  );

  Detail_Beasiswa.addHook('beforeValidate', (model, options) => {
    model.createdAt = new Date();
    model.updatedAt = new Date();
  });
  return Detail_Beasiswa;
};
