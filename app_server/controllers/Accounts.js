const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
};
if (process.env.NODE_ENV === 'production') {
apiOptions.server = 'https://no-gouda.onrender.com';
}
const _renderRegistration = function(req, res, responseBody){
    if(responseBody != null){
        res.render('register', { 
        pageHeader: {
            title: 'Logged In'
        },
        isLoggedIn: true
        });
    }
    else {
    res.render('register', {
        pageHeader: {
            title: 'Register'
        },
        isLoggedIn: false
        });
    }   
}

const register = function(req, res){ 
    if(req.method === 'GET'){
        responseBody = null;
        _renderRegistration(req, res, responseBody)
    }
    else if(req.method == 'POST'){
        const path = '/api/accounts/register';
        const requestOptions = {
            url : apiOptions.server + path,
            method : 'POST',
            json : {
                "firstName" : req.body.firstName,
                "lastName" : req.body.lastName,
                "username" : req.body.username,
                "password" : req.body.password
            },
            qs : {}
        }
    }
    request(requestOptions, (err, response, responseBody) => {
    if (err) { 
            res.render('error', {
                title: 'Error',
                err: err
            });
            console.log(err); 
        } 
        else if (response.statusCode === 200) { 
            _renderRegistration(req, res, responseBody); 

        } 
        else {
            res.render('error', {
                title: 'Error',
                err: err
            }); 
            console.log(response.statusCode);  
        }
    });
};

const _renderLogin = function(req, res){
    if(responseBody != null){
        res.render('log in', { 
        pageHeader: {
            title: 'Logged In'
        },
        isLoggedIn: true
        });
    }
    else {
    res.render('login', {
        pageHeader: {
            title: 'Log in'
        },
        isLoggedIn: false
        });
    }   
}

const login = function(req, res){ 
    if(req.method === 'GET'){
        responseBody = null;
        _renderLogin(req, res, responseBody)
    }
    else if(req.method == 'POST'){
        const path = '/api/accounts/login';
        const requestOptions = {
            url : apiOptions.server + path,
            method : 'POST',
            json : {
                "username" : req.body.username,
                "password" : req.body.password
            },
            qs : {}
        }
    }
    request(requestOptions, (err, response, responseBody) => {
    if (err) { 
            res.render('error', {
                title: 'Error',
                err: err
            });
            console.log(err); 
        } 
        else if (response.statusCode === 200) { 
            _renderLogin(req, res, responseBody); 

        } 
        else {
            res.render('error', {
                title: 'Error',
                err: err
            }); 
            console.log(response.statusCode);  
        }
    });
};

module.exports = { 
register,
login
}