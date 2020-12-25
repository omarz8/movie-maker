import React from 'react';
import Movie from "../components/Movie";
// import matrix from "../img/matrix.jpg";
import { useQuery} from '@apollo/client';
import allMovies from '../apollo/queries';


export default function Movies() {
    const {loading, error, data} = useQuery(allMovies);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Something wrong was happening!</p>
    console.log(data);

    if (data.movies.length===0){
        return <h2>Please add movies of your choice</h2>
    }
    
    return (
        <div className= "movies">
           { data.movies.map((movie)=>{
               return <Movie  key={movie.name}
               name= {movie.name} 
               genre={movie.genre}
               year={movie.year}
               />
            })}
        </div>
    )
}
