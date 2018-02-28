const express = require('express');
const router = express.Router();
const movies = require('../models/Movies');




router.get('/', (req,res,next) => {
    movies.find({}, function (err, movie) {
        if (err) return res.status(500).send("User 전체 조회 실패.");
        res.status(200).send(movie);
    })
})

router.post('/', (req, res) => {
    movies.create({
        name : req.body.name,
        year : req.body.year,
        director : req.body.director,
        poster : req.body.poster
    },
        (err, movie) => {
            if (err) return res.status(500).send("User 생성 실패.");
            res.status(200).send(movie);
        })
})

router.get('/:id', (req,res,next) => {
    const id = parseInt(req.param.id, 10);
    const movie = movies.filter(v=>v.id === id);
    res.send(movie);
})

module.exports = router;
