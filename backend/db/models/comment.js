'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    pictureId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    body: {
      type: DataTypes.TEXT
    }
  }, {});
  Comment.associate = function (models) {
    // associations can be defined here
    Comment.belongsTo(models.User, { foreignKey: 'userId' })
    Comment.belongsTo(models.Picture, { foreignKey: 'pictureId' })
  };
  return Comment;
};
