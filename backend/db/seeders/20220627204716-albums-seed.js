'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Albums', [
      {
        name: 'My album',
        userId: 1,
        coverImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'My 2nd Album',
        userId: 1,
        coverImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Not an album',
        userId: 2,
        coverImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Albums', null, {});
  }
};
