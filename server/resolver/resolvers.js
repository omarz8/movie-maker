const Movie= require ('../model/model')

const resolvers = {
    movies: () => {
        //all movies
        return Movie.find({})
    },
    addMovie: (args) => {
        let movie = new Movie({
            name: args.name,
            genre: args.genre,
            year: args.year
        })
        movie.save()
        return movie
    }
}

module.exports = resolvers