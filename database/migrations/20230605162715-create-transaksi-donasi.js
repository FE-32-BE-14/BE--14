'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Transaksi_Donasis', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      donasi_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      no_va: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      status: {
        allowNull: false,
        type: Sequelize.ENUM('Terbayar', 'Tidak Terbayar'),
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Transaksi_Donasis');
  },
};
