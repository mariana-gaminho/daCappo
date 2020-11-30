const router = require('express').Router();
const passport = require('../config/passport');
const { signup, login, logout } = require('../controllers/auth.controllers');

router.post('/signup', signup);
router.post('/login', passport.authenticate('local'), login);
router.get('/logout', logout);

module.exports = router;