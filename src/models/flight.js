'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    static associate(models) {
      // define association here
      this.belongsTo(models.Airplane, {
        foreignKey: 'airplaneId',
        as:'airplane_detail'
      });
      this.belongsTo(models.Airport, {
        foreignKey: 'departureAirportId',
        targetKey: 'code',
        as: 'departureAirport'
      });
      this.belongsTo(models.Airport, {
        foreignKey: 'arrivalAirportId',
        targetKey: 'code',
        as: 'arrivalAirport'
      });
    }
  }
  Flight.init({
    flightNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    airplaneId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    departureAirportId: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    arrivalAirportId: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    departureTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    arrivalTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },

    boardingGate: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    totalSeats: { // total remaining seats
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Flight',
  });
  return Flight;
};