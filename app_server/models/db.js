const mongoose = require('mongoose');
const username= process.env.DB_USERNAME;
const password= process.env.DB_PASSWORD;
const dbURI =
"mongodb+srv://" + username + ":" + password + "@cluster0.jwc2d.mongodb.net/Cheese?retryWrites=true&w=majority";
try {
mongoose.connect(
dbURI,
{ useNewUrlParser: true, useUnifiedTopology: true }).then(
() => {console.log(" Mongoose is connected")},
err=> {console.log(err)}
);
}
catch (e) {
console.log("could not connect");
}
require('./cheeses');