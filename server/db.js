const mongoose = require("mongoose");
require("dotenv").config();
const connection = mongoose.connect(mongodburl);

module.exports = {
  connection,
};
