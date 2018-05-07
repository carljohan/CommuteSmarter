'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Events', [
      {
        color: 'red', 
        location: 'Torsgatan', 
        lat: 54.566456, 
        long: 56.77998,
        title:'Obstacle',
        reported:'2018-04-27 09:30',
        description: 'car crash',
      },
      {
        color:'orange', 
        location: 'Kungsgatan',
        lat: 54.566456,
        long: 56.77998,
        title:'closed for Marathon',
        reported:'2018-04-27 11:30', 
        description:'Marathon',
      },
      {
        color:'blue', 
        location: 'Odengatan',
        lat: 54.566456, 
        long: 56.77998,
        title:'emergency response vehicle', 
        reported:'2018-04-27 14:30', 
        description:'something',
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Events', null, {});
  }
};
