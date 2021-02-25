import React from 'react'

function Header( {theme, setTheme} ) {
    function toggleTheme() {
        if (theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

    return (
        <header className="todo-header">
            <div className="todo-header-container">
                <h1>TODO</h1>
                <div className="todo-theme-toggle" onClick={toggleTheme}></div>
            </div>
        </header>
    )
}

export default Header