import React from 'react';
import TodoListActions from './TodoListActions';

const Header = () => (
    <header className="header">
        <div className="header__logo">
            MOOTH<strong>TODO</strong>
        </div>
        <TodoListActions />
    </header>
);

export default Header;
