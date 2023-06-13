'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Kategoris',
      [
        { name: 'Disabilitas Fisik' },
        { name: 'Disabilitas Intelektual' },
        { name: 'Disabilitas Psikologis' },
        { name: 'Disabilitas Perilaku dan Emosional' },
        { name: 'Disabilitas Neurologis' },
        { name: 'Disabilitas Sensorik' },
        { name: 'Disabilitas Kronis' },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Kategoris', null, {});
  },
};
