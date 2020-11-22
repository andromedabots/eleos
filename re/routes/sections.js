const mongoose = require("mongoose")
import { nanoid } from "nanoid"

const schema = new mongoose.Schema({
  id: {
    type: String,
    default: () => nanoid(),
  },
  name: { type: String },
  panel: { type: String },
  channel: { type: String },
  role: { type: String },
  reaction: { type: String },
  createdAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model(
  `${__filename.split(`${__dirname}/`).pop().split(`.`).shift()}`,
  schema
)
