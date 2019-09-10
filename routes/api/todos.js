const express = require('express');
const TodoItem = require('../../models/TodoItem');

const router = express.Router();

// @route   GET /api/todos
// @desc    Get all todos
// @access  Public
router.get('/', (req, res) => {
    TodoItem.find()
        .sort({
            created_at: -1
        })
        .then(item => res.json(item))
        .catch(console.log);
});

// @route   POST /api/todos/create
// @desc    Create a todo
// @access  Public
router.post('/create', (req, res) => {
    const { name } = req.body;

    const newItem = new TodoItem({
        name
    });

    newItem
        .save()
        .then(item => res.json(item))
        .catch(console.log);
});

// @route   DELETE /api/todos/delete/:id
// @desc    DELETE a todo
// @access  Public
router.delete('/delete/:id', (req, res) => {
    const { id } = req.params;

    console.log('id:', id);

    TodoItem.findByIdAndDelete(id)
        .then(item => {
            console.log(item);
            if (!item)
                res.status(404).json({
                    msg: 'Item not found...',
                    success: false
                });
            else
                res.json({
                    msg: 'Item deleted...',
                    success: true
                });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                msg: 'A server error occurred...',
                success: false
            });
        });
});

// @route   POST /api/todos/update/:id
// @desc    Update a todo
// @access  Public
router.post('/update/:id', (req, res) => {
    const { id } = req.params;
    const { name, complete } = req.body;

    TodoItem.findById(id)
        .then(item => {
            if (!item)
                res.status(404).json({
                    msg: 'Item not found...',
                    success: false
                });
            else {
                item.name = name ? name : item.name;
                item.complete =
                    typeof complete === 'boolean' ? complete : item.complete;

                item.save()
                    .then(newItem => res.json(newItem))
                    .catch(err => {
                        console.log(err);
                        res.status(400).json({
                            msg: 'Update failed',
                            success: false
                        });
                    });
            }
        })
        .catch(err => console.log(err));
});

module.exports = router;
