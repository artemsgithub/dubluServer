const Sequelize = require('sequelize');
require("dotenv").config()



const sequelize = new Sequelize(
    process.env.DATABASE_URL || 
    `postgresql://postgres:${encodeURIComponent(process.env.DB_PASS)}@localhost/dublu`,
    {
        dialect: 'postgres'
    }
)

sequelize.authenticate().then(
   
    function() {
        console.log('Connected');
    },

    function(err){
        console.log(err);
    }
);

module.exports = sequelize; 

