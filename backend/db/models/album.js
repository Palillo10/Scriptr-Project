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
    }
  }, {});
  Album.associate = function (models) {
    // associations can be defined here
    Album.belongsTo(models.User, { foreignKey: 'userId' })
    Album.hasMany(models.Picture, { foreignKey: 'albumId' })
  };
  return Album;
};
