const Todo = require('../Models/Todo')

exports.getAllTodos = (req, res) => {
    // simply use .find() method and it will return all the todos
    Todo.find()
        .sort("-createdAt")
        .exec((err, todos) => {
            // error checking
            if (err || !todos) {
                return res.status(400).json({
                    error: "Something went wrong in finding all todos",
                });
            }
            // return all the todos in json format
            res.json(todos);
        });
};
