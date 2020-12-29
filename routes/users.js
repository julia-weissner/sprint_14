const userRout = require('express').Router();
const { getUsers, getUserById, createUser } = require('../controllers/users');

userRout.get('/', getUsers);
userRout.get('/:id', getUserById);
userRout.post('/', createUser);

module.exports = userRout;
