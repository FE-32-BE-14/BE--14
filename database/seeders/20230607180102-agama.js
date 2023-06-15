'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Agamas',
      [
        {
          name: 'Islam',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Protestan',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Katolik',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Hindu',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Buddha',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Khonghucu',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Agamas', null, {});
  },
};
