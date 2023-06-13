'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Doc_Disabilitas',
      [
        {
          foto: 'ashgd87td972tdb96d7FOTO',
          sk_disabilitas: '7162vsasnd276d9 8652dv5689b387d63b9365SKDISABILITAS',
          user_id: 1,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Doc_Disabilitas', null, {});
  },
};
