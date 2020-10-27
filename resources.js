const Discord = require(`discord.js`)
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "USER"] })
const merge = require("deepmerge")
const gdb = require("../global/db.js")

let localconfig = require("./config.json")
const globalconfig = require("../global/config.json")
const newconfig = merge(globalconfig, localconfig)

const vars = require("../global/vars.js")
vars.config = newconfig

let localdb = require("./re/db.js")
const db = merge(localdb, gdb)

const fn = require("../global/fn.js")
// const locations = require("./locations.js")
const locations = db.emap

const prefix = newconfig.prefix

const locales = require("../global/i18n.js")

exports.data = {
  vars,
  fn,
  func: fn,
  prefix,
  db,
  locations,
  l: locations,
  client,
  Discord,
  locales,
  config: newconfig,
  moment: require("moment"),
}

exports.data.list = Object.getOwnPropertyNames(exports.data)
