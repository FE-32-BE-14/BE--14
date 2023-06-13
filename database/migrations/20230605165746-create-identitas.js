'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Identitas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      name_lengkap: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tempat_lhr: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tanggal_lhr: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      jenis_kelamin: {
        type: Sequelize.ENUM('Laki-laki', 'Perempuan'),
        allowNull: false,
      },
      no_nik: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      no_kk: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      agama_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      provinsi: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      kabupaten: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      kecamatan: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      desa: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('Identitas');
  },
};
