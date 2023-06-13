'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Doc_Beasiswas',
      [
        {
          ijazah_terakhir: 'haghdf8o72tg1p1s72620s87IJAZAHTERAKHIR',
          prestasi: '8711vs671vdibqgd625or879 9d761 997vdtvc86t27PRESTASI',
          user_id: 1,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Doc_Beasiswas', null, {});
  },
};
