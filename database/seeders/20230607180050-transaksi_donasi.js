'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Transaksi_Donasis',
      [
        {
          donasi_id: 1,
          no_va: 12873619853176,
          status: 'Terbayar',
          user_id: 1,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Transaksi_Donasis', null, {});
  },
};
