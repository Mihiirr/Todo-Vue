const express = require("express");
const router = express();
const Todo = require("../models/todo");

router.get("/completed", (req, res) => {
  Todo.find({ isCompleted: true }, (err, todo) => {
    if (err) res.josn("error while fetching todo");
    else res.json(todo);
  });
});

router.get("/uncompleted", (req, res) => {
  Todo.find({ isCompleted: false }, (err, todo) => {
    if (err) res.josn("error while fetching todo");
    else res.json(todo);
  });
});

router.post("/createtodo", (req, res) => {
  let todo = new Todo({
    title: req.body.title,
    isCompleted: false,
  });

  todo.save((err) => {
    if (err) res.json("error while adding todo");
    else res.json({ message: "todo successfully added", todo });
  });
});

router.post("/completed/:id", (req, res) => {
  Todo.findByIdAndUpdate(req.params.id, { isCompleted: true }, (err, todo) => {
    if (!err) res.json("good work!!");
  });
});

router.delete('/deletetodo/:id', async (req, res) => {
    const todolist = await Todo.findByIdAndRemove(req.params.id);

    if (!todolist) return res.status(404).send('the given id was not found...');

    res.json('successfully deleted todo!!!')
});

module.exports = router;
