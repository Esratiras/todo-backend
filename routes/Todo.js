const express = require('express');
const router = express.Router();
const Todo = require('../Models/Todo')

router.get('/todos', function(req, res, next) {
  const promise = Todo.find({})
  promise.then((data)=>{
    res.json(data)
  }).catch((err)=>{
    res.json(err)
  })
});

module.exports = router;
