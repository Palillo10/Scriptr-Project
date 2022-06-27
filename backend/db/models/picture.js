'use strict';
module.exports = (sequelize, DataTypes) => {
  const Picture = sequelize.define('Picture', {
    name: {
      type: DataTypes.STRING(75),
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    albumId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    imageUrl: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true
    },
    description: {
      type: DataTypes.TEXT,
      defaultValue: "Describe your picture here :)"
    }
  }, {});
  Picture.associate = function (models) {
    // associations can be defined here
    Picture.belongsTo(models.User, { foreignKey: 'userId' })
    Picture.belongsTo(models.Album, { foreignKey: 'albumId' })
    Picture.hasMany(models.Comment, { foreignKey: 'pictureId' })
  };
  return Picture;
};
