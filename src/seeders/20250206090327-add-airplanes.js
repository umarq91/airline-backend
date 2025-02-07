'use strict';

const { Logger } = require('../config');
 
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await queryInterface.bulkInsert('Airplanes', [
        {
          modelNumber: 'Airbus A340',
          capacity: 599,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNumber: 'Boeing 747',
          capacity: 660,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNumber: 'Embraer E190',
          capacity: 114,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);
      Logger.info("Seed Added Successfully")
    } catch (error) {
      console.error('❌ Error inserting seed data:', error);
    }
  },

  async down(queryInterface, Sequelize) {
    try {
      await queryInterface.bulkDelete('Airplanes', null, {});
      Logger.info("Seed Data Delete Successfully")
    } catch (error) {
      console.error('❌ Error reverting seed data:', error);
    }
  },
};
