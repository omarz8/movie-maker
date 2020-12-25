import React from 'react';
import {HashLink as Link} from 'react-router-hash-link';

export default function header() {
    return (
        <div className="topnav">
            <a href="/" className="logo">Movie Maker</a>
            <div className="search-container">
            <form action="">
                <Link smooth to="#form">Add Movies</Link>
                <input type="text" placeholder="search..." name="search"/>
                <button type="submit" ><i className="fas fa-search"></i></button>
            </form>
            </div>
        </div>
    )
}
