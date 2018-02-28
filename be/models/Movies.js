var mongoose = require('mongoose');

var movies = new mongoose.Schema({
    name : String,
    year : Number,
    director : String,
    poster : String
});

mongoose.model('Movies', movies)

module.exports = mongoose.model('Movies')
