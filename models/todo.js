const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },

    isCompleted: {
        type: Boolean
    }
})

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;