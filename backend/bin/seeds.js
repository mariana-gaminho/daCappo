const mongoose = require('mongoose');
const MusicSheet = require('../models/MusicSheet');

const musicSheets = [
  {

  }
];

const users = [
  {

  }
];

mongoose.connect(process.env.DB, {useNewUrlParser: true});
