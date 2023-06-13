'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Donasis',
      [
        {
          Pendonasi_id: 1,
          tujuan_id: 1,
          nominal: 500000,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Donasis', null, {});
  },
};
