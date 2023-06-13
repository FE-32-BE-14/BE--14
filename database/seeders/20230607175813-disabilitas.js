'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Disabilitas',
      [
        {
          name: 'Kebutaan',
          kategori_id: 1,
        },
        {
          name: 'Ketulian',
          kategori_id: 1,
        },
        {
          name: 'Keterbelakangan Mental',
          kategori_id: 2,
        },
        {
          name: 'Kesulitan Belajar',
          kategori_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Gangguan Kesehatan Mental',
          kategori_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Kecemasan',
          kategori_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Gangguan Perilaku',
          kategori_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Gangguan Emosional',
          kategori_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Autism Spectrum Disorder (ASD)',
          kategori_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Epilepsi',
          kategori_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Gangguan Penglihatan',
          kategori_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Gangguan Pendengaran',
          kategori_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Diabetes',
          kategori_id: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Penyakit Jantung',
          kategori_id: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Disabilitas', null, {});
  },
};
