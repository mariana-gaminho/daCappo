const router = require('express').Router();
const { addMusicSheet, getAllMusicSheets } = require('../controllers/music.controllers');

// REST API
// Create / Add
router.post('/musicSheet', addMusicSheet);

// Read
router.get('/musicSheet', getAllMusicSheets);

module.exports = router;