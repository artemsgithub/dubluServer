const Sequelize = require('sequelize');
require("dotenv").config()



const sequelize = new Sequelize(
    process.env.DATABASE_URL || 
    `postgresql://postgres:${encodeURIComponent(process.env.DB_PASS)}@localhost/dublu`,
    {
        dialect: 'postgres',
  dialectOptions: !process.env.DATABASE_URL.includes('localhost') ? {
    ssl: {
      require: true,
      rejectUnauthorized: false, // <<<<<<< YOU NEED THIS TO FIX UNHANDLED REJECTION 
    },
  } : {}
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

