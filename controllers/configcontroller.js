let express = require('express')
let router = express.Router()
const validateSession = require('../middleware/validate-session')

const Config = require('../db').import('../models/config')


// ADD CONFIG 
router.post('/createconfig', validateSession, (req, res) => {
    const configEntry = {
        interestRate: req.body.config.interestRate,
        downPmt: req.body.config.downPmt,
        insuranceRate: req.body.config.insuranceRate,
        owner: req.user.id,
    }
    Config.create(configEntry)
        .then(configs => res.status(200).json(configs))
        .catch(err => res.status(500).json({ error: err }))
});

// GET CONFIG BY USER

router.get("/myConfigs", validateSession, (req, res) => {
    let userid = req.user.id
    Config.findAll({
        where: { owner: userid }
    })
        .then(configs => res.status(200).json(configs))
        .catch(err => res.status(500).json({ error: err }))
});

// EDIT CONFIG 



module.exports = router