const router = require('express').Router();
const { signup, login } = require('../controllers/user.controllers');

router.post('/signup', signup);
router.get('/login', login);

module.exports = router;