'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Kategoris',
      [
        { name: 'Disabilitas Fisik', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Disabilitas Intelektual', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Disabilitas Psikologis', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Disabilitas Perilaku dan Emosional', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Disabilitas Neurologis', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Disabilitas Sensorik', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Disabilitas Kronis', createdAt: new Date(), updatedAt: new Date() },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Kategoris', null, {});
  },
};
