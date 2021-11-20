var express = require('express');
var router = express.Router();
const Todo = require('../Models/Todo')

router.post('/', function(req, res, next) {
    const {title,completed} = req.body

    const todo = new Todo({
        title:title,
        completed:completed
    })

    const promise = todo.save()

    promise.then((data) => {
        res.json(data)
    }).catch((err) => {
        res.json(err)
    })
});

module.exports = router;
