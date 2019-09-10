import React from 'react';
import Checkbox from './Checkbox';
import { MdDelete } from 'react-icons/md';

const TodoItem = ({ todo, onTodoChange, onTodoDelete }) => {
    return (
        <div className="TodoItem">
            <Checkbox
                label={todo.name}
                id={todo._id}
                onChange={e => onTodoChange(e)}
                checked={todo.complete}
            />

            <button
                onClick={() => onTodoDelete()}
                title="Delete todo"
                className="btn TodoItem__btn"
            >
                <MdDelete size="2em" />
            </button>
        </div>
    );
};

export default TodoItem;
