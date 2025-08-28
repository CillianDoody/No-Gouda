const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/cheese');
const ctrlAccounts = require('../controllers/accounts');

router
    .route('/cheese')
    .get(ctrlLocations.cheeseList);

router
    .route('/cheese/:cheeseID')
    .get(ctrlLocations.cheeseReadOne);
router
    .route('/accounts/register')
    .post(ctrlAccounts.RegisterAccount);
router
    .route('/accounts/login')
    .post(ctrlAccounts.LoginAccount);
module.exports = router;