const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  id: { type: String },
  author: { type: String },
  section: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model(`${__filename.split(`${__dirname}/`).pop().split(`.`).shift()}`, schema);