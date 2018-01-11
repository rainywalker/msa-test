const express = require('express');
const router = express.Router();
const movies = require('../movies.json');

router.get('/', (req,res,next) => {
    res.send(movies)
})

router.get('/:id', (req,res,next) => {
    const id = parseInt(req.param.id, 10);
    const movie = movies.filter(v=>v.id === id);
    res.send(movie);
})

module.exports = router;