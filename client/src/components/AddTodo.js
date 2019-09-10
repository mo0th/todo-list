import React, { useState, useContext } from 'react';
import { MdAdd } from 'react-icons/md';
import { TodoContext } from '../contexts/TodoContext';

const AddTodo = () => {
    const [todoText, setTodoText] = useState('');
    const { addTodo } = useContext(TodoContext);

    const handleChange = e => {
        setTodoText(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        addTodo(todoText);
        setTodoText('');
    };

    return (
        <>
            <form className="AddTodo" onSubmit={e => handleSubmit(e)}>
                <input
                    className="TodoListActions__input"
                    type="text"
                    value={todoText}
                    placeholder="Add a todo..."
                    onChange={e => handleChange(e)}
                />
                <button
                    title="Add todo"
                    className="btn TodoListActions__btn"
                    type="submit"
                >
                    <MdAdd size="2em" />
                </button>
            </form>
        </>
    );
};

export default AddTodo;
