const MusicSheet = require('../models/MusicSheet');

// Create
exports.addMusicSheet = (req, res, next) => {
  MusicSheet.create({...req.body})
  .then(musicSheet => res.status(201).json({ musicSheet }))
  .catch(err => res.status(500).json({ err }))
}

// Read
exports.getAllMusicSheets = (req, res, next) => {
  MusicSheet.find()
  .then(musicSheets => res.status(200).json({ musicSheets }))
  .catch(err => res.status(500).json({ err }))
}