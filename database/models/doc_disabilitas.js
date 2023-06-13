'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Doc_Disabilitas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Doc_Disabilitas.belongsTo(models.Users, {
      //   as: 'Users',
      //   foreignKey: 'user_id',
      //   onDelete: 'CASCADE',
      //   onUpdate: 'CASCADE',
      // });
    }
  }
  Doc_Disabilitas.init(
    {
      foto: DataTypes.TEXT,
      sk_disabilitas: DataTypes.TEXT,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Doc_Disabilitas',
    }
  );

  Doc_Disabilitas.addHook('beforeValidate', (model, options) => {
    model.createdAt = new Date();
    model.updatedAt = new Date();
  });
  return Doc_Disabilitas;
};