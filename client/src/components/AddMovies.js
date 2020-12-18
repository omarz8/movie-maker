import React from 'react'

export default function AddMovies() {
    return (
        <div className="addMovie">
            <form onSubmit={()=> alert('movie added!')}>
                <label>Name</label>
                <input type="text" required/>
                <label>Genre</label>
                <input type="text" required/>
                <label>Year</label>
                <input type="text" placeholder="(opctional)"/>
                <button type="submit">Add Movie</button>
            </form>
        </div>
    )
}
