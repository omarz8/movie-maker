//const {buildSchema}= require('graphql');
const { gql } = require('apollo-server');

const typeDefs = gql`
#   scalar Upload

  type Query {
    movies: [Movie],
    movieByName(name:String!): Movie
}

 type Mutation{
    addMovie(name: String!, genre: String!, year: String!): Movie
    image(file: Upload!): Image
}

 type Movie {
    name: String,
    genre: String,
    year: String ,
}
type Image {
    id: ID!,
    path: String!,
    filename: String!,
    mimetype: String!,
    encoding: String!
}
`;

module.exports = typeDefs