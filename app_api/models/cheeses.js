const mongoose = require('mongoose');


const cheeseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    sensations: [String]
 }, 
{
    collection: "Cheeses"
});
var Cheese = mongoose.model('Cheeses', cheeseSchema);

 module.export = {
    Cheese
 };