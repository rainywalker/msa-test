'use strict';

var express = require('express');
var router = express.Router();
var movies = require('../models/Movies');

router.get('/', function (req, res, next) {
    movies.find({}, function (err, movie) {
        if (err) return res.status(500).send("User 전체 조회 실패.");
        res.status(200).send(movie);
    });
});

router.post('/', function (req, res) {
    movies.create({
        name: req.body.name,
        year: req.body.year,
        director: req.body.director,
        poster: req.body.poster
    }, function (err, movie) {
        if (err) return res.status(500).send("User 생성 실패.");
        res.status(200).send(movie);
    });
});

router.get('/:id', function (req, res, next) {
    var id = parseInt(req.param.id, 10);
    var movie = movies.filter(function (v) {
        return v.id === id;
    });
    res.send(movie);
});

module.exports = router;
//# sourceMappingURL=movies.js.map