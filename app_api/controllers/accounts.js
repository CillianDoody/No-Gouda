const mongoose = require('mongoose');
const RegisterAccount = function (req, res) {
    Account
        .create({
            "firstName": req.body.firstName,
            "lastName": req.body.lastName,
            "username": req.body.username,
            "password": req.body.password
        })
        .then(Account => {
            res
            .status(200)
            .json({
                "message" : "You have been registered",
                "loggedIn" : 0
            });
        })
        .catch (err => {
            res
                .status(400)
                .json({
                    "message" : err,
                    "loggedIn" : 0
                });
        }); 
};  

const LoginAccount = function(req, res) {
    Account
        .findOne({"username" : req.body.username})
        .then(account => {
                res
                .status(200)
                .json({
                    "message": "Login Successful",
                    "loggedIn" : 1       
            });
        })
        .catch(err => { 
            res
            .status(404)
            .json({
                "message" : "There is no account with this username",
                "loggedIn": 0
            });
        }); 
    }

module.exports = {
    RegisterAccount,
    LoginAccount
}