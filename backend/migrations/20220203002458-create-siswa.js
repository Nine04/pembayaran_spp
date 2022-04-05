'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('siswa', {
      nisn: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.CHAR
      },
      nis: {
        type: Sequelize.CHAR
      },
      nama: {
        type: Sequelize.STRING
      },
      id_kelas: {
        type: Sequelize.INTEGER,
        references: {
          model: "kelas",
          key: "id_kelas"
        }
      },
      alamat: {
        type: Sequelize.TEXT
      },
      no_tlp: {
        type: Sequelize.STRING
      },
      id_spp:{
        type:Sequelize.INTEGER,
        references:{
          model:"spp",
          key:"id_spp"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('siswa');
  }
};