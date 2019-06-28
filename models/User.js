const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create Schema
// gets prop like name/email
// different types like String, Date, Num etc
// required or not
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("users", UserSchema);

// export set variable User
// set mongoose model to name 'users' and schema created
