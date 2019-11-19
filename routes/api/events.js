const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Event = require('../../models/Event');


router.get('/', (req, res) => {
  Event.find()
    .then(events => res.json(events))
    .catch(err => res.status(404).json({noeventsfound: 'No events found'}))
});

router.get('/:id', (req, res) => {
  Event.findById(req.params.id)
    .then(event => res.json(event))
    .catch(err =>
      res.status(404).json({ noeventfound: 'No event found with that ID' })
    );
});

router.get('/user/:user_id', (req, res) => {
  Event.find({ user: req.params.user_id })
    .then(events => res.json(events))
    .catch(err =>
      res.status(404).json({ noeventsfound: 'No events found from that user' }
      )
    );
});


//temporary route to create events
router.post('/',
  // only authenticating for post request, (user required)
  passport.authenticate('jwt', { session: false }),
  (req, res) => {

    const newEvent = new Event({
      name: req.body.name,
      photo: req.body.photoURL,
      rating: req.body.rating,
      address: req.body.address
    });

    newEvent
      .save()
      .then(event => res.json(event));
  }
);

module.exports = router;