import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import TodoItem from './TodoItem';

const TodoList = () => {
    const { todos, markTodoComplete, deleteTodo } = useContext(TodoContext);

    const handleTodoChange = id => {
        markTodoComplete(id);
    };

    return (
        <div className="TodoList">
            {todos.length ? (
                todos.map(todo => (
                    <TodoItem
                        todo={todo}
                        key={todo._id}
                        onTodoChange={() => handleTodoChange(todo._id)}
                        onTodoDelete={() => deleteTodo(todo._id)}
                    />
                ))
            ) : (
                <h3>You have nothing left to do!</h3>
            )}
        </div>
    );
};

export default TodoList;
