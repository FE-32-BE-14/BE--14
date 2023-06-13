'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Tujuan_Donasis',
      [
        {
          name: 'BAZNAS',
          deskripsi: `Badan Amil Zakat Nasional (Baznas) juga membuka kanal pengumpulan donasi atau sedekah untuk korban gempa Cianjur. Untuk berdonasi lewat Baznas, caranya bisa dengan mengunjungi tautan ini. Setelah tautan terbuka, masukkan nominal sedekah atau donasi yang hendak diberikan. Kemudian, isi data diri dan lanjutkan ke proses pembayaran. Di Baznas, pembayaran donasi bisa melalui dompet digital atau transfer bank. Sedekah yang terkumpul akan digunakan untuk membantu memenuhi kebutuhan korban gempa Cianjur, seperti makanan, obat-obatan, perlengkapan bayi, masker, selimut, perlengkapan kebersihan, alat ibadah, dan sebagainya.
          Artikel ini telah tayang di Kompas.com dengan judul "5 Kanal Donasi yang Bisa Dimanfaatkan untuk Membantu Korban Gempa Cianjur", Klik untuk baca: https://tekno.kompas.com/read/2022/11/26/08020027/5-kanal-donasi-yang-bisa-dimanfaatkan-untuk-membantu-korban-gempa-cianjur.
          Penulis : Zulfikar Hardiansyah
          Editor : Zulfikar Hardiansyah
          Kompascom+ baca berita tanpa iklan: https://kmp.im/plus6
          Download aplikasi: https://kmp.im/app6`,
          img: 'hjsjd2oo87972nn2097230fb807PNG',
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tujuan_Donasis', null, {});
  },
};
