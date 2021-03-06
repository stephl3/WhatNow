const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require('../../models/User');
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// private auth route
router.get("/current", passport.authenticate("jwt", { session: false }, (req, res) => {
  res.json({
    id: req.user.id,
    username: req.user.username,
    email: req.user.email
  });
}))

// user registration route
router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      errors.email = "Email already exists";
      return res.status(400).json(errors);
    } else {
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password
      })

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser.save()
            .then(user => {
              const payload = {
                id: user.id,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                friends: user.friends,
                whativities: user.whativities
              };

              jwt.sign(
                payload,
                keys.secretOrKey,
                { expiresIn: 3600 },
                (err, token) => {
                  res.json({
                    success: true,
                    token: "Bearer " + token
                  });
                });
            })
            .catch(err => console.log(err))
        })
      })
    }
  })
})

// user login route
router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).then(user => {
    if (!user) {
      errors.email = "This user does not exist";
      return res.status(404).json(errors);
    }

    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const payload = { 
          id: user.id, 
          username: user.username,
          firstName: user.firstName,
          lastName: user.lastName,
          friends: user.friends,
          whativities: user.whativities
        };

        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          });
      } else {
        errors.password = "Incorrect password";
        return res.status(400).json(errors);
      }
    })
  })
})

router.get('/:id', (req, res) => {
  User.findOne({_id: req.params.id})
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => res.status(404).json('User not found'))
})

router.patch('/update/:id', (req, res) => {
  User.findOne({_id: req.params.id})
    .then(user => {
      if (req.body.friendId) { //add friend
        user.friends.push(req.body.friendId);
        user.save();
        console.log(user);
        res.status(200).json(user);
      } else if (req.body.whativityId) { //add user whativity
        user.whativities.push(req.body.whativityId);
        user.save();
        console.log(user);
        res.status(200).json(user);
      }
      
      // if (!user) {
      //   user.friends.push(req.body.friendId);
      //   user.save();
      //   console.log(user);
      //   res.status(200).json(user);
      // } else {
      //   let idx = user.friends.indexOf(req.body.friendId);
      //   user.friends.splice(idx, 1);
      //   user.save();
      //   console.log(user);
      //   res.status(200).json(user);
      // }
    })
})

// router.patch('/update/:id', (req, res) => {
//   User.findOne({_id: req.params.id})
//     .then(user => {
      // debugger
      // if (!user) {
        // user.whativities.push(req.body.whativityId);
        // user.save();
        // console.log(user);
        // res.status(200).json(user);
      // } else {
      //   let idx = user.whativities.indexOf(req.body.whativityId);
      //   user.whativities.splice(idx, 1);
      //   user.save();
      //   console.log(user);
      //   res.status(200).json(user);
      // }
//     })
// })
module.exports = router;