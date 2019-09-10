import React from 'react';
import { TodoContextProvider } from './contexts/TodoContext';
import Header from './components/Header';
import TodoList from './components/TodoList';
import './App.scss';

const App = () => {
    return (
        <TodoContextProvider>
            <div className="App">
                <Header />
                <main className="main">
                    <TodoList />
                </main>
            </div>
        </TodoContextProvider>
    );
};

export default App;
