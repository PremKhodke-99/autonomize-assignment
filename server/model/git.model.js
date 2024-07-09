const mongoose = require('mongoose');

const gitSchema = mongoose.Schema({}, {strict: false});

module.exports = mongoose.model("GitModel", gitSchema);