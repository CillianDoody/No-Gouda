const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/cheeses');
const ctrlOthers = require('../controllers/others');
const ctrlAccounts = require('../controllers/Accounts');

/* Cheese pages */
router.get('/', ctrlLocations.homelist);

/* About page */
router.get('/about', ctrlOthers.about);

/* Accounts page */
router.get('/register', ctrlAccounts.register);
router.post('/register', ctrlAccounts.register);
router.get('/login', ctrlAccounts.login);
router.post('/login', ctrlAccounts.login);

module.exports = router;
