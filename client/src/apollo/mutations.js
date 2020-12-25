import { gql } from '@apollo/client';

const ADD_MOVIE = gql`
    mutation addMovie($name: String!, $genre: String!, $year: String!){
        addMovie(name: $name, genre: $genre, year: $year){
            name
            genre
            year
        }
    }
`

export default ADD_MOVIE;