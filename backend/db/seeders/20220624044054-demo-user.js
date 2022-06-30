'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password'),
        profilePic: 'https://mario.wiki.gallery/images/thumb/a/a1/DMW-KingBobOmb.png/250px-DMW-KingBobOmb.png'
      },
      {
        email: 'user1@user.io',
        username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync('password2'),
        profilePic: 'https://motivationalwizard.com/wp-content/uploads/2020/04/Fake-People-1024x682.jpg'
      },
      {
        email: 'JoyBoy@user.io',
        username: 'JoyBoy',
        hashedPassword: bcrypt.hashSync('password3'),
        profilePic: 'https://pbs.twimg.com/media/FPRlMgYXwAYB7Nj?format=jpg&name=small'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
