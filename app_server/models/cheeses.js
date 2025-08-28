const mongoose = require('mongoose');

const cheesesSchema = new mongoose.Schema({
name: {
    type: String,
    required: true
},
sensations: [String],
 });
 mongoose.model('cheeses', cheesesSchema);