import React, {useState} from 'react';
import Movie from "../components/Movie";
import matrix from "../img/matrix.jpg";


export default function Movies() {
const movies=[
    {id:3, name:'Matrix', genre: 'action', year:'1999', image: matrix},
    {id:2, name:'Matrix', genre: 'action', year:'1999', image: matrix},
    {id:4, name:'Matrix', genre: 'action', year:'1999', image: matrix},
    {id:5, name:'Matrix', genre: 'action', year:'1999', image: matrix},
    {id:6, name:'Matrix', genre: 'action', year:'1999', image: matrix},
    {id:1, name:'Matrix', genre: 'action', year:'1999', image: matrix},
    {id:7, name:'Matrix', genre: 'action', year:'1999', image: matrix},
    {id:8, name:'Matrix', genre: 'action', year:'1999', image: matrix}
    
]

    const [state, setstate] = useState(movies);


    return (
        <div className= "movies">
           { movies.map((movie)=>{
               return <Movie  key={movie.id}
               name= {movie.name} 
               genre={movie.genre}
               year={movie.year}
               image={movie.image}
               />
            })}
        </div>
    )
}
