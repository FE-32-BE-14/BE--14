'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Beasiswas',
      [
        {
          name: 'ANDROID ENGINEERING COURSE',
          deskripsi: `Proses seleksi Studi Independen Binar Academy meliputi :
                    1. Pengerjaan Logic Test. Pengerjaan Logic Test dapan diakses dilink ini  http://binar.club/logic-test 
                    2. Pengerjaan Kuesioner Modal Belajar. Setelah mengerjakan Logic Test, kalian akan langsung diarahkan untuk klik melanjutkan pengerjaan kuesioner modal belajar
                    Jika ada pertanyaan silakan bisa cek di FAQ kami https://binar.club/faqkm5 
                    Seluruh aktivitas pada 7 course yang ada di Binar Academy Bootcamp memiliki aktivitas yang sama persis, hal yang membedakan hanya output knowledge dari masing - masing course. Studi pembelajaran Android Engineering pada Binar Bootcamp terbagi menjadi 3 tahap (yang sudah dijelaskan pada bagian “Program Framework”) yaitu: 
                    1. Level Silver (Chapter 0 - 3), Level Silver akan dijalankan sebanyak 18 sesi, di mana pada level ini peserta akan diharapkan untuk melakukan pembelajaran secara asynchronous dengan materi yang telah disiapkan oleh tim akademi Binar dan didampingi oleh fasilitator.   
                    2. Level Gold (Chapter 4 - 7), Level Gold dijalankan sebanyak 24 sesi melalui forum diskusi dengan 3 jam (180 menit) per sesi. Fasilitator akan menyampaikan dengan sistem Flipped learning melalui asynchronous teaching dan synchronous teaching dan juga dibimbing oleh fasilitator via forum diskusi. Level ini berfokus pada pengembangan skill individu masing - masing siswa. 
                    3. Level Platinum (Chapter 8 - 9), Level Platinum akan dijalankan sebanyak 12 Sesi dengan 3 jam per sesi dan fasilitator akan mendampingi saat pembuatan product class. Fasilitator juga menyediakan sesi diskusi melalui asynchronous teaching dan synchronous teaching. Level ini berfokus pada pengembangan skill tim project masing - masing siswa. '
                  `,
          img: 'sbd289d8d297tx67b278rdbt',
        },
        {
          name: 'FRONT END JAVASCRIPT COURSE',
          deskripsi: `Proses seleksi Studi Independen Binar Academy meliputi :
              1. Pengerjaan Logic Test. Pengerjaan Logic Test dapan diakses dilink ini  http://binar.club/logic-test 
              2. Pengerjaan Kuesioner Modal Belajar. Setelah mengerjakan Logic Test, kalian akan langsung diarahkan untuk klik melanjutkan pengerjaan kuesioner modal belajar
              Jika ada pertanyaan silakan bisa cek di FAQ kami https://binar.club/faqkm5 
              Seluruh aktivitas pada 7 course yang ada di Binar Academy Bootcamp memiliki aktivitas yang sama persis, hal yang membedakan hanya output knowledge dari masing - masing course. Studi pembelajaran Android Engineering pada Binar Bootcamp terbagi menjadi 3 tahap (yang sudah dijelaskan pada bagian “Program Framework”) yaitu: 
              - Level Silver (Chapter 0 - 3), Level Silver akan dijalankan sebanyak 18 sesi, di mana pada level ini peserta akan diharapkan untuk melakukan pembelajaran secara asynchronous dengan materi yang telah disiapkan oleh tim akademi Binar dan didampingi oleh fasilitator.
              - Level Gold (Chapter 4 - 7), Level Gold dijalankan sebanyak 24 sesi melalui forum diskusi dengan 3 jam (180 menit) per sesi. Fasilitator akan menyampaikan dengan sistem Flipped learning melalui asynchronous teaching dan synchronous teaching dan juga dibimbing oleh fasilitator via forum diskusi. Level ini berfokus pada pengembangan skill individu masing - masing siswa.    
              - Level Platinum (Chapter 8 - 9), Level Platinum akan dijalankan sebanyak 12 Sesi dengan 3 jam per sesi dan fasilitator akan mendampingi saat pembuatan product class. Fasilitator juga menyediakan sesi diskusi melalui asynchronous teaching dan synchronous teaching. Level ini berfokus pada pengembangan skill tim project masing - masing siswa.    `,
          img: 'sbd289d8d297tx67b278rdbt',
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Beasiswas', null, {});
  },
};
