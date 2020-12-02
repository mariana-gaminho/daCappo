const User = require('../models/User');

// Create
exports.signup = (req, res, next) => {
  User.create({...req.body})
  .then(user => res.status(201).json({ user }))
  .catch(err => res.status(500).json({ err }))
}

// Find
exports.login = (req, res, next) => {
  User.find()
  .then(users => res.status(201).json({ users }))
  .catch(err => res.status(500).json({ err }))
}