const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Whativity = require('../../models/Whativity');


router.get('/', (req, res) => {
  Whativity.find()
    .then(whativities => res.json(whativities))
    .catch(err => res.status(404).json({nowhativitiesfound: 'No whativities found'}))
});

router.get('/:id', (req, res) => {
  Whativity.findById(req.params.id)
    .then(whativity => res.json(whativity))
    .catch(err =>
      res.status(404).json({ nowhativitesfound: 'No whativity found with that ID' })
    );
});

router.get('/user/:user_id', (req, res) => {
  Whativity.find({ user: req.params.user_id })
    .then(whativities => res.json(whativities))
    .catch(err =>
      res.status(404).json({ nowhativitiesfound: 'No whativities found from that user' }
      )
    );
});


//temporary route to create whativities
router.post('/',
  // only authenticating for post request, (user required)
  // passport.authenticate('jwt', { session: false }),
  (req, res) => {

    const newWhativity = new Whativity({
      name: req.body.name,
      photo: req.body.photoURL,
      rating: req.body.rating,
      address: req.body.address
    });

    newWhativity
      .save()
      .then(whativity => res.json(whativity));
  }
);

module.exports = router;