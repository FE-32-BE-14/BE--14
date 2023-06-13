'use strict';

const { DATE } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Verifikasi_Disabilitas',
      [
        {
          user_id: 1,
          status_disabilitas: 'Disabilitas',
          kategori_id: 2,
          disabilitas_id: 1,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Verifikasi_Disabilitas', null, {});
  },
};
