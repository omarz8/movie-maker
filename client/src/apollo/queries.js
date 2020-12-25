import { gql } from '@apollo/client';


const allMovies= gql`
{
    movies{
        name
        genre
        year
    }
}
`


export default allMovies;