module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("config", {
    interestRate: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    downPmt: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    insuranceRate: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    owner: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

  });

  return User;
};
