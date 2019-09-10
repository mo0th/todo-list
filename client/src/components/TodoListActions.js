import React, { useContext } from 'react';
import { MdDoneAll, MdDeleteForever } from 'react-icons/md';
import AddTodo from './AddTodo';
import { TodoContext } from '../contexts/TodoContext';

const TodoListActions = () => {
    const { markAllTodosComplete, deleteAllTodos } = useContext(TodoContext);
    return (
        <div className="TodoListActions">
            <AddTodo />
            <button
                onClick={() => markAllTodosComplete()}
                title="Mark all done"
                className="btn TodoListActions__btn"
            >
                <MdDoneAll size="2em" />
            </button>
            <button
                onClick={() => deleteAllTodos()}
                title="Delete all"
                className="btn TodoListActions__btn"
            >
                <MdDeleteForever size="2em" />
            </button>
        </div>
    );
};

export default TodoListActions;
