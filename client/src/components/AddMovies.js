import React, { useState } from 'react';
import { useMutation} from '@apollo/client';
import ADD_MOVIE from '../apollo/mutations';
import allMovies from '../apollo/queries';


export default function AddMovies() {

    const [addMovie, { data }] = useMutation(ADD_MOVIE);
    console.log(data);
    
    const [name, setName] = useState('')
    const [genre, setGenre] = useState('')
    const [year, setYear] = useState('')

    const submitMovie = (e) => {
        e.preventDefault();
        addMovie({
            variables: {
                name,
                genre,
                year
            },
            refetchQueries: [{query: allMovies}]
        })
    }
    return (
        <div className="addMovie" id="form">
            <form onSubmit={submitMovie}>
                <label>Name</label>
                <input type="text" required onChange={(e) => setName(e.target.value)} />
                <label>Genre</label>
                <input type="text" required onChange={(e) => setGenre(e.target.value)} />
                <label>Year</label>
                <input type="text" placeholder="(optional)" onChange={(e) => setYear(e.target.value)} />
                <button type="submit">Add Movie</button>
            </form>
        </div>
    )
}
