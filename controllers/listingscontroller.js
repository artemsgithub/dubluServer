let express = require('express')
let router = express.Router()
const validateSession = require('../middleware/validate-session')

const Listings = require('../db').import('../models/listings')



// CREATE LISTING
router.post('/create', validateSession, (req, res) => {
    const listingsEntry = {
        propertyAddress: req.body.listing.propertyAddress,
        comments: req.body.listing.comments,
        askingPrice: req.body.listing.askingPrice,
        semiTax: req.body.listing.semiTax,
        estIncome: req.body.listing.estIncome,
        owner: req.user.id
    }
    Listings.create(listingsEntry)
        .then(listings => res.status(200).json(listings))
        .catch(err => res.status(500).json({ error: err }))
});

// /* ***************************************
//  ***GET ALL ENTRIES; ) ***
//  *************************************** */
// router.get("/", (req, res) => {
//     Beer.findAll()
//         .then(beers => res.status(200).json(beers))
//         .catch(err => res.status(500).json({ error: err }))
// });


// GET LISTINGS BY USER
router.get("/mine", validateSession, (req, res) => {
    let userid = req.user.id
    Listings.findAll({
        where: { owner: userid },
    })
        .then(listings => res.status(200).json(listings))
        .catch(err => res.status(500).json({ error: err }))
});


// EDIT CONTROLER
router.put("/edit/:id", validateSession, function (req, res) {
    const editListing = {
        propertyAddress: req.body.listing.propertyAddress,
        comments: req.body.listing.comments,
        askingPrice: req.body.listing.askingPrice,
        semiTax: req.body.listing.semiTax,
        estIncome: req.body.listing.estIncome,
        owner: req.user.id
    };
    const query = { where: { id: req.params.id, owner: req.user.id } }
    Listings.update(editListing, query)
        .then((listing) => res.status(200).json(listing))
        .catch((err) => res.status(500).json({ error: err }))
})

// DELETE CONTROLLER 
router.delete("/delete/:id", validateSession, function (req, res) {
    const query = { where: { id: req.params.id, owner: req.user.id } };

    Listings.destroy(query)
        .then(() => res.status(200).json({ message: "Removed listing" }))
        .catch((err) => res.status(500).json({ error: err }))
})



module.exports = router