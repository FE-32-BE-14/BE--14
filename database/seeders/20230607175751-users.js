'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          email: 'admin@gmail.com',
          password: '$2b$10$CQrP1q7669PRyj7Cts93SetpFnc0N8RaIEdPaFsCfANtatPGy7D6y', //admin123
          refresh_token: 'ka87dbjsdhggahj87dbd1986d62d186d1hfd17d1iq17s1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
