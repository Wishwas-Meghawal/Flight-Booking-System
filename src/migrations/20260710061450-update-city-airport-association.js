'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint('Airports', {
      fields: ['cityId'],
      type: 'FOREIGN KEY',
      name: 'city_fkey_constraint',
      references: {
        table: 'cities',
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
  },

  async down(queryInterface) {
    await queryInterface.removeConstraint(
      'Airports',
      'city_fkey_constraint'
    );
  }
};
