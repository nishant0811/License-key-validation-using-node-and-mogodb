const mongoose = require('mongoose');

//Creating mongoose model here
const LicenseSchema = new mongoose.Schema({
  key : String
})

module.exports = License = mongoose.model('license',LicenseSchema);
