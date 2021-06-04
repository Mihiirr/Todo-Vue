const mongoose = require('mongoose');
const {todoSchema} = require('./todo').Schema;

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },

    password: {
        type: String,
        require: true
    },

    todo: [todoSchema]
})

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;