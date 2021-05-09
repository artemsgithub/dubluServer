let express = require('express')
let router = express.Router()
const validateAdmin = require('../middleware/validate-admin')

const User = require('../db').import('../models/user')

router.get("/all-users", validateAdmin, (req, res) => {
    User.findAll({
      
    })
        .then(users => res.status(200).json(users))
        .catch(err => res.status(500).json({ error: err }))
});


module.exports = router
