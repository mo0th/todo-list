import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        axios.get('/api/todos').then(res => {
            setTodos(res.data)
            setLoading(false);
        });
    }, []);

    // useEffect(() => {
    //     console.log(todos);
    // }, [todos]);

    const addTodo = name => {
        if (!name) return;
        axios
            .post('/api/todos/create', {
                name
            })
            .then(res => setTodos(prevTodos => [res.data, ...prevTodos]));
    };

    const markTodoComplete = id => {
        axios
            .post(`/api/todos/update/${id}`, {
                complete: !todos.filter(todo => todo._id === id)[0].complete
            })
            .then(() => {
                setTodos(prevTodos =>
                    prevTodos.map(todo => {
                        if (todo._id === id) {
                            return {
                                ...todo,
                                complete: !todo.complete
                            };
                        }
                        return todo;
                    })
                );
            });
    };

    const markAllTodosComplete = () => {
        todos.forEach(todo =>
            axios.post(`/api/todos/update/${todo._id}`, {
                complete: true
            })
        );
        setTodos(prevTodos =>
            prevTodos.map(todo => ({ ...todo, complete: true }))
        );
    };

    const deleteTodo = id => {
        axios
            .delete(`/api/todos/delete/${id}`)
            .then(() =>
                setTodos(prevTodos => prevTodos.filter(todo => todo._id !== id))
            );
    };

    const deleteAllTodos = () => {
        todos.forEach(({ _id }) => deleteTodo(_id));
    };

    return (
        <TodoContext.Provider
            value={{
                todos,
                addTodo,
                markTodoComplete,
                markAllTodosComplete,
                deleteTodo,
                deleteAllTodos,
                loading
            }}
        >
            {children}
        </TodoContext.Provider>
    );
};
