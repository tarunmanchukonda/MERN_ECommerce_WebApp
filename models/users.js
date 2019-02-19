const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  name: String,
  email: String,
  username: String,
  auth0_id: String
});

const userModel = mongoose.model("Users", userSchema);
module.exports = userModel;
