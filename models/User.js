const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  photoUrl: {
    type: String
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  whativities: [{
    type: Schema.Types.ObjectId,
    ref:  'whativity'
  }],
  friends: [{
    type: Schema.Types.ObjectId,
    ref: 'users'
  }]
})

module.exports = User = mongoose.model("users", UserSchema);