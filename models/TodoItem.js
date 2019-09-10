const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        default: false
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = TodoItem = mongoose.model('todoItem', TodoItemSchema);
