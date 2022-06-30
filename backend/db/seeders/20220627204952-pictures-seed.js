'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Pictures', [
      {
        name: 'Parse_arguments',
        userId: 1,
        albumId: 1,
        imageUrl: 'https://miro.medium.com/max/696/1*hmvn5XYLGXrF4ACspVqgPw.png',
        description: 'This is how you parse arguments',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'ToastView',
        userId: 1,
        albumId: 1,
        imageUrl: 'https://code.visualstudio.com/assets/docs/languages/javascript/auto-import-after.png',
        description: 'What a toasty view!!!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Swing Tool',
        userId: 1,
        albumId: 2,
        imageUrl: 'https://forum-files-playcanvas-com.s3-eu-west-1.amazonaws.com/original/2X/b/bc8c1c0f10c896197ac9e90aee6666832e4f0baa.JPG',
        description: "Sugar, we're going down swinging!",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Python Script',
        userId: 2,
        albumId: 3,
        imageUrl: 'https://miro.medium.com/max/1400/1*1Ga5RoTKbLzQuGDw8EcqDg.png',
        description: 'PYTHON TOO SLOW',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Game Lighting',
        userId: 2,
        imageUrl: 'https://www.gamedesigning.org/wp-content/uploads/2020/08/Roblox-Scripting.jpg',
        description: 'How do I fix this lighting?',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Great job',
        userId: 3,
        imageUrl: 'https://www.tecmint.com/wp-content/uploads/2020/11/if-else-statement.png',
        description: 'YOOOO great job',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Pictures', null, {});
  }
};
