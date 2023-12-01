const mongoose = require("mongoose");

const testSchema = new mongoose.Schema({
  userName: { type: String },
  formIds: { type: Array },
  auth1: { type: String },
  auth2: { type: String },
  auth3: { type: String },
});

const testModel = mongoose.model("testUser", testSchema);
module.exports = testModel;
