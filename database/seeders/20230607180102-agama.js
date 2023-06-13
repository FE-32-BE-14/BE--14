'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'agamas',
      [
        {
          name: 'Islam',
        },
        {
          name: 'Protestan',
        },
        {
          name: 'Katolik',
        },
        {
          name: 'Hindu',
        },
        {
          name: 'Buddha',
        },
        {
          name: 'Khonghucu',
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('agamas', null, {});
  },
};
