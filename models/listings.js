module.exports = (sequelize, DataTypes) => {

    const Listings = sequelize.define('listings', {
        propertyAddress: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        comments: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        askingPrice: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        semiTax: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        estIncome: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        
        owner: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    })

    return Listings;
};

