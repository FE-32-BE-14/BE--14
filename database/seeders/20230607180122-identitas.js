'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Identitas',
      [
        {
          user_id: 1,
          name_lengkap: 'Muhammad Subhan',
          tempat_lhr: 'Bondowoso',
          tanggal_lhr: new Date(2000, 11, 12),
          jenis_kelamin: 'Laki-laki',
          no_nik: '9556246524362652347675',
          no_kk: '1826385837153781527123',
          agama_id: 1,
          provinsi: 'Jawa Timur',
          kabupaten: 'Bondowoso',
          kecamatan: 'Tamanan',
          desa: 'Kalianyar',
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Identitas', null, {});
  },
};
