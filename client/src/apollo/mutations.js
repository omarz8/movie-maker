import { gql } from '@apollo/client';

const ADD_MOVIE = gql`
    mutation addMovie($name: String!, $genre: String!, $year: String!, $file: fileInput){
        addMovie(name: $name, genre: $genre, year: $year, file: $file){
            name
            genre
            year
            file
        }
    }
`

export default ADD_MOVIE;