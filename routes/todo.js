var express = require('express');
var router = express.Router();
const Todo = require('../Models/Todo')

router.post('/', function(req, res, next) {
    const {title} = req.body

    const todo = new Todo({
        title:title
    })

    const promise = todo.save()

    promise.then((data) => {
        res.json(data)
    }).catch((err) => {
        res.json(err)
    })
});

module.exports = router;
