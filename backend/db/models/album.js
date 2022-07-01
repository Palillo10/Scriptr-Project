'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    coverImage: {
      type: DataTypes.STRING(255),
      defaultValue: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
    },
  }, {});
  Album.associate = function (models) {
    // associations can be defined here
    Album.belongsTo(models.User, { foreignKey: 'userId' })
    Album.hasMany(models.Picture, { foreignKey: 'albumId' })
  };
  return Album;
};
