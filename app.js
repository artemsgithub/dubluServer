let express = require('express');
let app = express();
const sequelize = require('./db') // where database from
let cors = require('cors');
require("dotenv").config();

let listings = require('./controllers/listingscontroller')
let user = require('./controllers/usercontroller');
let configs = require('./controllers/configcontroller')
let admin = require('./controllers/admincontroller')


sequelize.sync();
//  sequelize.sync({ force: true });
app.use(require('./middleware/headers'));

// enable CORS using npm package
app.use(cors());


app.use(express.json())

// EXPOSED ROUTES
app.use('/user', user)

// PROTECTED ROUTES
app.use('/listings', listings)
app.use('/configs', configs)
app.use('/admin', admin)



app.listen(process.env.PORT, () => {
  console.log(`server is listening on port ${process.env.PORT}`)
})
