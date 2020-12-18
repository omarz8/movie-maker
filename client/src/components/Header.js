import React from 'react'

export default function header() {
    return (
        <div className="topnav">
            <a href="/" className="logo">Movie Maker</a>
            <div className="search-container">
            <form action="">
                <a href="/">Add Movies</a>
                <input type="text" placeholder="search..." name="search"/>
                <button type="submit" ><i className="fas fa-search"></i></button>
            </form>
            </div>
        </div>
    )
}
