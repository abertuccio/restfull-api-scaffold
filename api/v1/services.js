const express = require('express');
const router = express.Router();
router.use(express.json());

// const authentication = require('./authentication');
const listUsers = require('./services/listUsers');
const newUser = require('./services/newUser');

// router.use(authentication);
router.get('/user', listUsers);
router.post('/user', newUser);

module.exports = router;