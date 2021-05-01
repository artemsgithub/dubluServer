module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("config", {
    interestRate: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },

    downPmt: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },

    insuranceRate: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },

    owner: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

  });

  return User;
};
